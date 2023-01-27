import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";

import { enterDataOnFilterField, checkboxInteraction } from "../../store/slices/appliedFilters-slice";

export type AppliedFilters = {
    brand: string;
    checkedBrands: string[];
    color: string;
    checkedColors: string[];
    checkedSizes: number[];
    size: string;
    price: string;
};

const brand = "brand";
const color = "color";
const size = "size";
const price = "price";
const checkedBrands = "checkedBrands";
const checkedSizes = "checkedSizes";
const checkedColors = "checkedColors";

function Sidebar() {
    const stateFromAppliedFilters = useAppSelector((state) => state.appliedFilters);

    const dispatch = useAppDispatch();

    type onChangeEvent = React.ChangeEvent<HTMLInputElement>;

    // functions check value of name. if name !== property fields in state, it is still being added.
    function toCheckNamesOnFields(name: string) {
        if (name === color || name === brand || name === size || name === price) {
            return true;
        }
    }

    function toCheckNamesOnCheckBoxes(name: string) {
        if (name === checkedColors || name === checkedBrands || name === checkedSizes) {
            return true;
        }
    }

    function filterChangeHandler(event: onChangeEvent) {
        const { name, value } = event.target;

        if (toCheckNamesOnFields(name)) {
            dispatch(enterDataOnFilterField({ ...stateFromAppliedFilters, [name]: value }));
        }
    }

    function checkboxChangeHandler(event: onChangeEvent) {
        const { value, name, checked } = event.target;
        if (toCheckNamesOnCheckBoxes(name)) {
            dispatch(checkboxInteraction({ name, value, checked }));
        }
    }

    const searchBrand = (
        <section className="search-brand-container">
            <label htmlFor="search-brand">Brand</label>
            <input
                id="search-brand"
                placeholder="Search brand"
                type="text"
                name="brand"
                onChange={filterChangeHandler}
            />

            <label htmlFor="a">Apple</label>
            <input type="checkbox" name="checkedBrands" value="Apple" id="a" onChange={checkboxChangeHandler} />
            <label htmlFor="b">Microsoft Surface</label>
            <input
                type="checkbox"
                name="checkedBrands"
                value="Microsoft Surface"
                id="b"
                onChange={checkboxChangeHandler}
            />
            <label htmlFor="c">Samsung</label>
            <input type="checkbox" name="checkedBrands" value="Samsung" id="c" onChange={checkboxChangeHandler} />
        </section>
    );

    const range = (
        <section className="select-range-container">
            <label htmlFor="price">Price</label>
            <input type="range" min="0" max="1799" id="price" name="price" onChange={filterChangeHandler} />
        </section>
    );

    const searchColor = (
        <section className="search-colour-contianer">
            <label htmlFor="search-colour">Colour</label>
            <input
                id="search-color"
                placeholder="Search colour"
                type="text"
                name={color}
                onChange={filterChangeHandler}
            />

            <label htmlFor="a">red</label>
            <input type="checkbox" name="checkedColors" value="red" id="a" onChange={checkboxChangeHandler} />
            <label htmlFor="b">blue</label>
            <input type="checkbox" name="checkedColors" value="blue" id="b" onChange={checkboxChangeHandler} />
            <label htmlFor="c">green</label>
            <input type="checkbox" name="checkedColors" value="green" id="c" onChange={checkboxChangeHandler} />
        </section>
    );

    const searchSize = (
        <section className="search-size-container">
            <label htmlFor="search-size">Size</label>
            <input
                id="search-size"
                placeholder="Search size"
                type="number"
                min="30"
                max="32"
                step="1"
                name="size"
                onChange={filterChangeHandler}
            />

            <label htmlFor="a">30</label>
            <input type="checkbox" name="checkedSizes" value="30" id="30" onChange={checkboxChangeHandler} />
            <label htmlFor="b">31</label>
            <input type="checkbox" name="checkedSizes" value="31" id="31" onChange={checkboxChangeHandler} />
            <label htmlFor="c">32</label>
            <input type="checkbox" name="checkedSizes" value="32" id="32" onChange={checkboxChangeHandler} />
        </section>
    );

    const SearchBrand = (
        <section>
            {searchBrand}
            {range}
            {searchColor}
            {searchSize}
        </section>
    );

    const SectionHeading = <h2>Filter</h2>;

    return (
        <aside className="sidebar-container">
            {SectionHeading}
            {SearchBrand}
        </aside>
    );
}

export default Sidebar;
