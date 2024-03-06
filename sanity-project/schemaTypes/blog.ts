export default{
    name:'blog',
    type:'document',
    title:'Blog',
    fields:[
        {name:'title', type:'string', title:'Title'},
        {name:'slug', type:'slug', title:'Slug', options:{source:'title', maxLength:96}},
        {name:'titleImage', type:'image', title:'Title image'},
        {name:'smallDescription', type:'text', title:'Small description', description:'A small description of the blog post'},
        {name:'content',type:'array',title:'Content',of:[{type:'block',}]},
    ]
}    
