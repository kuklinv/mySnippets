export default (items1, items2) => (
    items1.filter((item) => !items2.includes(item))
);
