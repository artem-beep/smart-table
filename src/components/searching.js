import {rules, createComparison} from "../lib/compare.js";


export function initSearching(searchField) {
    // из стандартных правил нужно только пропускание пустых значений,
    // остальное делает поиск по нескольким полям
    const compare = createComparison(
        ['skipEmptyTargetValues'],
        [rules.searchMultipleFields(searchField, ['date', 'customer', 'seller'], false)]
    );

    return (data, state, action) => {
        return data.filter(row => compare(row, state));
    }
}
