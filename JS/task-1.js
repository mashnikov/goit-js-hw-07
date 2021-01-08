// const categoryRef = document.querySelector('#categories');
// console.log(`В списке ${categoryRef.children.length} категории`);

const categoryItemsRef = document.querySelectorAll('.item');
console.log(`В списке ${categoryItemsRef.length} категории`);

categoryItemsRef.forEach(categoryItemRef => {
    console.log(
        `Категория: ${categoryItemRef.firstElementChild.textContent}` +
            '\n' +
            `Количество элементов: ${
                categoryItemRef.querySelectorAll('li').length
            }`,
    );
});
