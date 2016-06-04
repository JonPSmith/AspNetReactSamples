import { find, findIndex} from 'babel-polyfill';

export function getCard(cards, id) {
    return cards.find((card) => card.id == id);
};

export function getCardIndex(cards, id) {
    return cards.findIndex((card) => card.id == id);
};