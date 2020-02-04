const generateSlug = require('../utilis/slugify');
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
       slug = await generateSlug(this,slug);
       const totalCount = await this.getTotalCount();
       console.log(slug);
       return  Object.assign({},{total: totalCount} ,this.create({
            title,
            slug,
            content,
            createdAt: new Date(),
        }));
    
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
