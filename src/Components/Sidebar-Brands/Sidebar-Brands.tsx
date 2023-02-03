import { useAppDispatch } from "../../store/hooks/hooks";

import {
  enterDataOnFilterField,
  checkboxInteraction,
  onFiltersChange,
} from "../../store/slices/products-slice";

import { brands } from "../../paths/names";

function SidebarBrands() {
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

  return searchBrand;
}

export default SidebarBrands;
