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
      <label htmlFor="search-brand" className="sidebar-label-mar-bttm sidebar-label-common-font">
        Brand
      </label>
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
        <label htmlFor="apple" className="sidebar-checkboxes-common-font">
          Apple
        </label>
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
        <label htmlFor="microsoft" className="sidebar-checkboxes-common-font">
          Microsoft 
        </label>
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
        <label htmlFor="samsung" className="sidebar-checkboxes-common-font">
          Samsung
        </label>
      </div>
    </section>
  );

  const range = (
    <section className="select-range-container ">
      <label htmlFor="price" className="sidebar-label-common-font">
        Price
      </label>
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
      <label htmlFor="search-colour" className="sidebar-label-common-font">
        Color
      </label>
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
        <label htmlFor="red" className="sidebar-checkboxes-common-font">
          Red
        </label>
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
        <label htmlFor="blue" className="sidebar-checkboxes-common-font">
          Blue
        </label>
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
        <label htmlFor="green" className="sidebar-checkboxes-common-font">
          Green
        </label>
      </div>
    </section>
  );

  const searchSize = (
    <section className="search-size-container">
      <label htmlFor="search-size" className="sidebar-label-mar-bttm sidebar-label-common-font">
        Size
      </label>
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
        <label htmlFor="30" className="sidebar-checkboxes-common-font">
          30
        </label>
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
        <label htmlFor="31" className="sidebar-checkboxes-common-font">
          31
        </label>
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
        <label htmlFor="32" className="sidebar-checkboxes-common-font">
          32
        </label>
      </div>
    </section>
  );

  const Search = (
    <section className="sidebar-contant">
      <div className="sidebar-sections-mar-bttm">{searchBrand}</div>
      <div className="sidebar-sections-mar-bttm">{range}</div>
      <div className="sidebar-sections-mar-bttm">{searchColor}</div>
      <div className="sidebar-sections-mar-bttm">{searchSize}</div>
    </section>
  );

  const SectionHeading = <h3>Filter</h3>;

  return (
    <aside className="sidebar-container">
      <div className="sidebar-content-align">
        {SectionHeading}
        {Search}
      </div>
    </aside>
  );
}

export default Sidebar;
