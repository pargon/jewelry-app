class CategoryList {
    static categoryList = [{
            id: 'acero',
            description: 'Acero'
        },
        {
            id: 'aluminio',
            description: 'Aluminio'
        },
        {
            id: 'plastico',
            description: 'Plastico'
        }
    ];
    static getAll() {
        return this.categoryList;
    }

}
module.exports = CategoryList;