const mongoose = require('mongoose');

const { Schema } = mongoose;

const articelSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    slug:{
        type: String,
        required: true,
        unique: true

    },
    content:{
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        required:true
    },
    updatedAt: {
        type:Date
    }
});

class ArticleClass {

    static async getTotalCount() {
        const totalCount = await this.countDocuments();
        return totalCount;
    }

    static async list({offset,limit,page,total} = {}) {
        const articles = await this.find({})
                                    .sort({createdAt:-1})
                                    .skip(offset)
                                    .limit(limit);
       // return {articles};
       return Object.assign({},{articles},{total:total,page:page})
    }   
    static async add({title,slug,content}) {
        //const slug = await generateSlug(this,title);
        const totalCount = await this.getTotalCount();
        const article = this.create({
            title,
            slug,
            content,
            createdAt: new Date(),
        });
        return Object.assign ( {} ,{article},{total: totalCount});
    }

    static async getByIdAndSlug({_id,slug}) {
        console.log(_id,slug);
        const article = await this.findOne({_id, slug});
        
        if(!article) {
            throw new Error('Article not found');
        }
        return {article};
    }

}

articelSchema.loadClass(ArticleClass);
const Article = mongoose.model('Article',articelSchema);

module.exports = Article;
