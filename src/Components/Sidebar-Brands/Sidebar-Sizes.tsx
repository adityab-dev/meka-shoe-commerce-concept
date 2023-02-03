import { useAppDispatch } from "../../store/hooks/hooks";

import { sizes } from "../../paths/names";

import {
  enterDataOnFilterField,
  checkboxInteraction,
  onFiltersChange,
} from "../../store/slices/products-slice";

function SidebarSizes() {
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

  return (
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
}

export default SidebarSizes;
