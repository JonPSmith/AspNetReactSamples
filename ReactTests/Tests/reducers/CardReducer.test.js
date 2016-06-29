import expect from 'expect';

import constants from '../../../ReactWebPack.CoreRC2/app/constants';
import cardReducer from '../../../ReactWebPack.CoreRC2/app/reducers/cardReducer';

describe('ReactWebPack.CoreRC2/app/reducers/cardReducer', () => {
    function createDummyCard(id) {
        if (id === undefined){
            throw new Error('You forgot to define the dummy card id')
        }
        return { 
            id,
            title: `Card${id}`
        }
    }

    it('Initial state', () => {
        const cards = cardReducer();
        expect(cards).toEqual([]);
    });

    it('FETCH_CARDS_SUCCESS', () => {
        const action = { 
            type: constants.FETCH_CARDS_SUCCESS,
            payload: { response : 'all cards'}
        }
        const cards = cardReducer([], action);
        expect(cards).toEqual('all cards');
    });

    it('CREATE_CARD, empty state', () => {
        const card1 = createDummyCard(1);
        const action = { 
            type: constants.CREATE_CARD,
            payload: { card : card1}
        }
        const cards = cardReducer([], action);
        expect(cards).toEqual([card1]);
    });

    it('CREATE_CARD, existing state', () => {
        const card1 = createDummyCard(1);
        const card2 = createDummyCard(2);
        const action = { 
            type: constants.CREATE_CARD,
            payload: { card : card2}
        }
        const cards = cardReducer([card1], action);
        expect(cards).toEqual([card1, card2]);
    });

    it('CREATE_CARD, check new instance of state', () => {
        //This checks that the reducer retuns a new instance of the state 
        const card1 = createDummyCard(1);
        const card2 = createDummyCard(2);
        const action = { 
            type: constants.CREATE_CARD,
            payload: { card : card2}
        }
        const startState = [card1];
        const endState = cardReducer(startState, action);
        expect(startState === endState).toEqual(false);
    });

    it('CREATE_CARD_SUCCESS', () => {
        const card1 = createDummyCard(1);
        const card2 = createDummyCard(2);
        const action = { 
            type: constants.CREATE_CARD_SUCCESS,
            payload: { 
                card : card2,
                response : {id: 200}
            }
        }
        const cards = cardReducer([card1,card2], action);
        expect(cards).toEqual([card1, {id : 200, title : 'Card2'}]);
    });

    //... I could write more but you get the idea. This is only an example after all!
}); 
