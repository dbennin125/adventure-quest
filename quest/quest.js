import quests from '../data/data.js';
import { findById } from '../utlis.js';

const params = new URLSearchParams(window.location.search); //find the params in the window 

const questId = params.get('id');

const quest = findById(quests, questId);


document.querySelector('body').append(JSON.stringify(quest));