import lastNewsCardConfig from './lastNewsCardConfig.js' 
import newsMainCardConfig from './newsMainCardConfig.js';
import trendsNewsCardConfig from './trendsNewsCardConfig.js';
import outCards from './outCards.js';
const news = [
        {
        id: 1,
        tag: 'sport',
        img: './public/news1.jpg',
        date: new Date(2020, 10, 4, 11, 58),
        title: 'Требониан Галл происходил из старинного этрусского рода...',
        description: 'Будущий император Гай Вибий Требониан Галл родился около 206 года...',
        likesCount: 11500,
        commentsCount: 11500,
        isLiked: true
        },
        {
        id: 2,
        tag: 'finance',
        img: './public/news1.jpg',
        date: new Date(2020, 10, 4, 11, 58),
        title: 'Рандомный загаловок1',
        description: 'Рандомный Текст1',
        likesCount: 11500,
        commentsCount: 11500,
        isLiked: true  
        }
    ]
outCards(news, newsMainCardConfig)
const sortByRateNews = [...news].sort((n1,n2) => n2.likesCount - n1.likesCount)
outCards(sortByRateNews, trendsNewsCardConfig);
const sortByTimeNews =[...news].sort((n1,n2) => n2.date - n1.date);
outCards(sortByTimeNews, lastNewsCardConfig)
