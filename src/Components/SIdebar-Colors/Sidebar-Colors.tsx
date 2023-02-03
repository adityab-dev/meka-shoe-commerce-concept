import { useAppDispatch } from "../../store/hooks/hooks";

import {
  enterDataOnFilterField,
  checkboxInteraction,
  onFiltersChange,
} from "../../store/slices/products-slice";

import { colors } from "../../paths/names";

function SidebarColors() {
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

  return searchColor;
}

export default SidebarColors;
