import { useAppDispatch } from "../../store/hooks/hooks";

import { price } from "../../paths/names";

import { enterDataOnFilterField, onFiltersChange } from "../../store/slices/products-slice";

function SidebarRange() {
  const dispatch = useAppDispatch();

  type onChangeEvent = React.ChangeEvent<HTMLInputElement>;

  function filterInputChangeHandler(event: onChangeEvent) {
    const { name, value } = event.target;

    dispatch(enterDataOnFilterField({ name, value }));
    dispatch(onFiltersChange());
  }

  return (
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
}

export default SidebarRange;
