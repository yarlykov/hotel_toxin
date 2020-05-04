import json from './assets/json.json';
import logo from './img/logo.svg'
import './style.css';
import Post from './Post';


const post = new Post('Webpack', logo);
console.log('Post to string:', post.toString());
console.log('JSON', json);