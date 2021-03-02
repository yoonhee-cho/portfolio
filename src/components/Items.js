import accountaBee from '../assets/images/accountaBee.jpg'
import mealp from '../assets/images/meal-p.jpg'
import garden from '../assets/images/garden.png'
import light from '../assets/images/light.png'
import recipes from '../assets/images/recipes.jpg'
import wood from '../assets/images/wood.jpg'


export const items =[
    {
        id: 0,
        title: 'AccountaBee',
        subTitle: 'mobile app',
        imgSrc: accountaBee,
        category:'code',
        link: '/accountabee'
    },
    {
        id: 1,
        title: 'Meal:P',
        subTitle: 'web app',
        imgSrc: mealp,
        category:'code',
        link: '/mealp'
    },
    {
        id: 2,
        title: 'Sprout',
        subTitle: 'mobile app',
        imgSrc: garden,
        category:'design',
        link: '/sprout'
    },
    {
        id: 3,
        title: 'CUP & CUP',
        subTitle: 'sustainable lighting',
        imgSrc: light,
        category:'design',
        link: '/cup'
    },
    {
        id: 3,
        title: 'Korean Comfort Food Recipes',
        subTitle: 'recipe zine',
        imgSrc: recipes,
        category:'design',
        link: '/recipes'
    },
    {
        id: 4,
        title: 'Trauma Box',
        subTitle: 'wood working',
        imgSrc: wood,
        category:'design',
        link: '/trauma-box'
    }
]