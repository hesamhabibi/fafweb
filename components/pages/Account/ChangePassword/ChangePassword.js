"use client"

import {Button, Col, Form, Row, Spinner} from "react-bootstrap";
import {useAuthContext} from "@core/contexts/AuthContext";
import useForm from "@core/hooks/useForm";
import {useState} from "react";
import {toast} from "react-toastify";
import useAuthFunctions from "@core/hooks/useAuthFunctions";

export default function PageAccountProfile() {

  const {change_password_api} = useAuthFunctions()
  const [form, , on_change_form] = useForm({});
  const [loading, set_loading] = useState(false);

  const submitHandler = async e => {
    e.preventDefault();

    const {old_password, password, password_confirmation} = form || {};

    if (old_password?.length && password?.length && password_confirmation?.length) {
      if (password === password_confirmation) {
        set_loading(true)
        await change_password_api({
          data: {old_password, password, password_confirmation},
          success_callback: (response) => {
            set_loading(false)
            toast.success("رمز عبور شما با موفقیت تغییر کرد");
          },
          error_callback: (response) => {
            set_loading(false)
            toast.error("مشکلی پیش آمده است");
          }
        })

      } else {
        toast.warn('فیلد پسورد جدید با فیلذ تکرار آن برابر نیست')
      }
    } else {
      toast.warn('لطفا همه فیلدها را پر کنید')
    }
  }


  // -----------------------------------------------------------------------------------------------------------------

  return (
    <div className="pt-3 px-4 pb-4">
      <Form autoComplete="off">
        <Row className="g-3">
          <Form.Group as={Col} md={6} controlId="exampleForm.ControlInput1" key={'change-pass-input-old_password'}>
            <Form.Label>رمز عبور فعلی</Form.Label>
            <Form.Control type="password" className="ltr" name={'old_password'} onChange={on_change_form}/>
          </Form.Group>
          <Col md={6}/>
          <Form.Group as={Col} md={6} controlId="exampleForm.ControlInput1" key={'change-pass-input-password'}>
            <Form.Label>رمز عبور جدید</Form.Label>
            <Form.Control type="password" className="ltr" name={'password'} onChange={on_change_form}/>
          </Form.Group>
          <Form.Group as={Col} md={6} controlId="exampleForm.ControlInput1"
                      key={'change-pass-input-password_confirmation'}>
            <Form.Label>تکرار رمز عبور جدید</Form.Label>
            <Form.Control type="password" className="ltr" name={'password_confirmation'} onChange={on_change_form}/>
          </Form.Group>
          <div>
            <Button
              type={'button'}
              onClick={submitHandler}
              disabled={(!form?.old_password?.length && !form?.password?.length && !form?.password_confirmation?.length) || loading}
            >
              {loading ? <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                /> :
                'ذخیره'}
            </Button>
          </div>
        </Row>
      </Form>
    </div>
  )
}
