import * as $ from 'jquery';
import json from './assets/json.json';
import logo from './img/logo.svg'
import './style.css';
import Post from '@/assets/Post';


const post = new Post('Webpack', logo);

$('pre').html(post.toString());
