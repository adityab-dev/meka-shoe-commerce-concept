import { useAppDispatch } from "../../store/hooks/hooks";

import {
  enterDataOnFilterField,
  checkboxInteraction,
  onFiltersChange,
} from "../../store/slices/products-slice";

import "./Sidebar.css";

export type AppliedFilters = {
  brands: string[];
  colors: string[];
  sizes: string[];
  price: string;
};

export const brands = "brands";
export const colors = "colors";
export const sizes = "sizes";
export const price = "price";

function Sidebar() {
  const dispatch = useAppDispatch();

  type onChangeEvent = React.ChangeEvent<HTMLInputElement>;

  function filterInputChangeHandler(event: onChangeEvent) {
    const { name, value } = event.target;

    dispatch(enterDataOnFilterField({ name, value }));
    dispatch(onFiltersChange());
  }

  function checkboxInteractionHandler(event: onChangeEvent) {
    const { name, value, checked } = event.target;

    dispatch(checkboxInteraction({ name, value, checked }));
    dispatch(onFiltersChange());
  }

  const searchBrand = (
    <section className="search-brand-container">
      <label htmlFor="search-brand">Brand</label>
      <input
        className="sidebar-inputs"
        id="search-brand"
        placeholder="Search brand"
        type="text"
        name={brands}
        onChange={filterInputChangeHandler}
      />

      <div className="sidebar-label-checkbox">
        <input
          className="sidebar-checkboxes"
          type="checkbox"
          name={brands}
          value="Apple"
          id="apple"
          onChange={checkboxInteractionHandler}
        />
        <label htmlFor="apple">Apple</label>
      </div>

      <div className="sidebar-label-checkbox">
        <input
          className="sidebar-checkboxes"
          type="checkbox"
          name={brands}
          value="Microsoft Surface"
          id="microsoft"
          onChange={checkboxInteractionHandler}
        />
        <label htmlFor="microsoft">Microsoft Surface</label>
      </div>

      <div className="sidebar-label-checkbox">
        <input
          className="sidebar-checkboxes"
          type="checkbox"
          name={brands}
          value="Samsung"
          id="samsung"
          onChange={checkboxInteractionHandler}
        />
        <label htmlFor="samsung">Samsung</label>
      </div>
    </section>
  );

  const range = (
    <section className="select-range-container">
      <label htmlFor="price">Price</label>
      <input
        type="range"
        min="0"
        max="1799"
        id="price"
        name={price}
        onChange={filterInputChangeHandler}
      />
    </section>
  );

  const searchColor = (
    <section className="search-colour-contianer">
      <label htmlFor="search-colour">Color</label>
      <input
        className="sidebar-inputs"
        id="search-color"
        placeholder="Search colour"
        type="text"
        name={colors}
        onChange={filterInputChangeHandler}
      />

      <div className="sidebar-label-checkbox">
        <input
          className="sidebar-checkboxes"
          type="checkbox"
          name={colors}
          value="red"
          id="red"
          onChange={checkboxInteractionHandler}
        />
        <label htmlFor="red">red</label>
      </div>

      <div className="sidebar-label-checkbox">
        <input
          className="sidebar-checkboxes"
          type="checkbox"
          name={colors}
          value="blue"
          id="blue"
          onChange={checkboxInteractionHandler}
        />
        <label htmlFor="blue">blue</label>
      </div>

      <div className="sidebar-label-checkbox">
        <input
          className="sidebar-checkboxes"
          type="checkbox"
          name={colors}
          value="green"
          id="green"
          onChange={checkboxInteractionHandler}
        />
        <label htmlFor="green">green</label>
      </div>
    </section>
  );

  const searchSize = (
    <section className="search-size-container">
      <label htmlFor="search-size">Size</label>
      <input
        className="sidebar-inputs"
        id="search-size"
        placeholder="Search size"
        type="number"
        min="30"
        max="32"
        step="1"
        name={sizes}
        onChange={filterInputChangeHandler}
      />

      <div className="sidebar-label-checkbox">
        <input
          className="sidebar-checkboxes"
          type="checkbox"
          name={sizes}
          value="30"
          id="30"
          onChange={checkboxInteractionHandler}
        />
        <label htmlFor="30">30</label>
      </div>

      <div className="sidebar-label-checkbox">
        <input
          className="sidebar-checkboxes"
          type="checkbox"
          name={sizes}
          value="31"
          id="31"
          onChange={checkboxInteractionHandler}
        />
        <label htmlFor="31">31</label>
      </div>

      <div className="sidebar-label-checkbox">
        <input
          className="sidebar-checkboxes"
          type="checkbox"
          name={sizes}
          value="32"
          id="32"
          onChange={checkboxInteractionHandler}
        />
        <label htmlFor="32">32</label>
      </div>
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
