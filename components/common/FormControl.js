"use client"

// import {useEffect, useState} from "react";

import {Form} from "react-bootstrap";
import Select from "react-select";
import InputMask from "react-input-mask";

export default function FormControl({control, value, ...props}) {

  // -----------------------------------------------------------------------------------------------------------------

  // const [valueControl, setValueControl] = useState();
  //
  // useEffect(() => {
  //   value = valueControl
  // }, [valueControl])

  // -----------------------------------------------------------------------------------------------------------------

  if (control === 'TEXTAREA') {
    const propsGroup = {
      controlId: props.id,
      as: props.as,
      xs: props.xs,
      sm: props.sm,
      md: props.md,
      lg: props.lg,
      xl: props.xl,
      xxl: props.xxl,
      className: props['classNameGroup']
    }
    const propsLabel = {
      className: props['classNameLabel']
    }
    const propsText = {
      id: props.id,
      name: props.name,
      disabled: props.disabled,
      className: `form-control ${props.className}`,
      inputMode: props.inputMode,
      dir: props.dir,
      rows: props.rows || 3,
      onChange: props.onChange
    }

    return (
        <Form.Group {...propsGroup}>
          {
            props.label && <Form.Label {...propsLabel}>{props.label}</Form.Label>
          }
          <Form.Control as="textarea" {...propsText} value={value} onChange={props.onChange}/>
          {
            props['helpText'] && <Form.Text>{props['helpText']}</Form.Text>
          }
        </Form.Group>
    )

  } else if (control === 'MASK') {
    const propsGroup = {
      controlId: props.id,
      as: props.as,
      xs: props.xs,
      sm: props.sm,
      md: props.md,
      lg: props.lg,
      xl: props.xl,
      xxl: props.xxl,
      className: props['classNameGroup']
    }
    const propsLabel = {
      className: props['classNameLabel']
    }
    const propsMask = {
      id: props.id,
      type: 'text',
      name: props.name,
      disabled: props.disabled,
      className: `form-control ${props.className}`,
      inputMode: props.inputMode,
      dir: props.dir,
      mask: props.mask,
      maskChar: props.maskChar || '‒',
      alwaysShowMask: props.alwaysShowMask || true,
      onChange: props.onChange
    }

    return (
      <Form.Group {...propsGroup}>
        {
          props.label && <Form.Label {...propsLabel}>{props.label}</Form.Label>
        }
        <InputMask {...propsMask} value={value} onChange={props.onChange}/>
        {
          props['helpText'] && <Form.Text>{props['helpText']}</Form.Text>
        }
      </Form.Group>
    )

  } if (control === 'SELECT') {
    const propsGroup = {
      as: props.as,
      xs: props.xs,
      sm: props.sm,
      md: props.md,
      lg: props.lg,
      xl: props.xl,
      xxl: props.xxl,
      className: props['classNameGroup']
    }
    const propsLabel = {
      id: props.id && `${props.id}Label`,
      htmlFor: props.id,
      className: props['classNameLabel']
    }
    const propsSelect = {
      'aria-labelledby': props.id && `${props.id}Label`,
      inputId: props.id,
      instanceId: props.id,
      options: props.options || [],
      name: props.name,
      placeholder: props.placeholder || 'انتخاب کنید...',
      disabled: !!props.disabled,
      className: `react-select${props.className ? ` ${props.className}` : ''}`,
      classNamePrefix: 'react-select',
      menuPlacement: props.menuPlacement || 'auto',
      // onChange: props.onChange

    }

    return (
      <Form.Group {...propsGroup}>
        {
          props.label && <Form.Label {...propsLabel}>{props.label}</Form.Label>
        }
        <Select {...propsSelect}
                value={propsSelect.options.find(item => item.value === value)}
                onChange={(e) => props.onChange({
                  target: {
                    name: props.name,
                    value: e.value
                  }
                })}/>
        {
          props['helpText'] && <Form.Text>{props['helpText']}</Form.Text>
        }
      </Form.Group>
    )

  } else {
    const propsGroup = {
      controlId: props.id,
      as: props.as,
      xs: props.xs,
      sm: props.sm,
      md: props.md,
      lg: props.lg,
      xl: props.xl,
      xxl: props.xxl,
      className: props['classNameGroup']
    }
    const propsLabel = {
      className: props['classNameLabel']
    }
    const propsControl = {
      type: props.type || 'text',
      // name: props.register ? undefined : props.name,
      name: props.name,
      placeholder: props.placeholder,
      disabled: !!props.disabled,
      className: props.className,
      readOnly: !!props.readOnly,
      inputMode: props.inputMode,
      autoComplete: props.autoComplete,
      'aria-describedby': props['helpText'] && `${props.id}Help`,
      dir: props.dir,
      // onChange: props.onChange
    }

    return (
      <Form.Group {...propsGroup}>
        {
          props.label && <Form.Label {...propsLabel}>{props.label}</Form.Label>
        }
        {/*{*/}
        {/*    props.register && props.name ? (*/}
        {/*        <Form.Control {...propsControl} {...props.register(props.name, props.registerOptions || {})}/>*/}
        {/*    ) : (*/}
        <Form.Control {...propsControl} value={value} onChange={props.onChange}/>
        {/*)*/}
        {/*}*/}
        {
          <Form.Control.Feedback type="invalid" tooltip>
            {/*{*/}
            {/*    errors?[props.name] && (errors[props.name].message || 'تکمیل این فیلد الزامی می باشد')*/}
            {/*}*/}
          </Form.Control.Feedback>
        }
        {
          props['helpText'] && <Form.Text>{props['helpText']}</Form.Text>
        }
      </Form.Group>
    )

  }
}