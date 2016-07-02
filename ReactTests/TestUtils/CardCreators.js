export function createCard(id = 1, status='done', tasks = []){
    return {
        id,
        title: `Card${id} title`,
        description: `Card${id} description`,
        color: '#123456',
        status,
        tasks
    }
}

export function createCards(num = 3, status='done', tasks = []) {
    let result = []
    for (let index = 0; index < num; index++) {
        result.push(createCard(index, status, tasks));
    }
    return result;
}