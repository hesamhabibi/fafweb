import {useState} from "react";
import * as immutable from "object-path-immutable";

const useForm = (init_values) => {
  const [form, set_form] = useState({
    ...init_values,
    errors: {}
  });

  const on_change = (e, extra_fields = {}) => {
    // find name and value from onchange event
    const {name, value} = e?.target;
    console.log("-----------------", name, value);
    set_form(prev => {
      // clone prev form in _form variable
      let _form = {...prev};

      // add main value in form
      if (![undefined, null]?.includes(value)) {
        _form = immutable.set(_form, name, value);
      } else {
        _form = immutable.del(_form, name);
      }

      // add extra values in form
      const extra_keys = Object.keys(extra_fields);
      if (extra_keys?.length > 0) {
        extra_keys?.forEach((key) => {
          const _value = extra_fields?.[key];
          if (![undefined, null,]?.includes(_value)) {
            _form = immutable.set(_form, key, _value);
          } else {
            _form = immutable.del(_form, key);
          }
        });
      }

      // set new form to state
      return _form;
    })
  }

  return [form, set_form, on_change];
}
export default useForm;