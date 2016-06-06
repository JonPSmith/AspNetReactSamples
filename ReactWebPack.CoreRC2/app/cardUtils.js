import { find, findIndex} from 'babel-polyfill';

export function getCard(cards, id) {
    if (!Array.isArray(cards)) {
        throw new Error('cards must be an array.')
    }
    return cards.find((card) => card.id == id);
};

export function getCardIndex(cards, id) {
    if (!Array.isArray(cards)) {
        throw new Error('cards must be an array.')
    }
    return cards.findIndex((card) => card.id == id);
};