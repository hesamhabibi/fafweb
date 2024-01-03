"use client"

import FormControl from "../../../common/FormControl";

import {Button, Col, Form, Row, Spinner} from "react-bootstrap";
import useAuthFunctions from "@core/hooks/useAuthFunctions";
import useForm from "@core/hooks/useForm";
import {useMemo, useState} from "react";
import {toast} from "react-toastify";
import {useAuthContext} from "@core/contexts/AuthContext";

export default function PageAccountProfile() {

  const {user_details} = useAuthContext();
  const {update_user_profile_api} = useAuthFunctions()
  const [form, set_form, on_change_form] = useForm({});

  useMemo(() => {
    if (user_details !== null)
      set_form({
        mobile: user_details?.mobile,
        email: user_details?.email,
        nickname: user_details?.full_name,
        name: user_details?.name,
        last_name: user_details?.last_name,
        gender: user_details?.gender,
        birthday: user_details?.birthday,
      })
  }, [user_details])

  console.log(form, user_details);

  const [loading, set_loading] = useState(false);

  const submitHandler = async e => {
    e.preventDefault();

    const {
      mobile,
      email,
      last_name,
      name,
      gender,
      birthday,
    } = form || {};

    set_loading(true)
    await update_user_profile_api({
      data: {
        // mobile,
        email,
        last_name,
        name,
        // gender,
        // birthday,
        username: user_details?.username
      },
      success_callback: (response) => {
        console.log('--------------------success_callback', response);
        set_loading(false)
        toast.success("پروفایل شما با موفقیت تغییر کرد");
      },
      error_callback: (response) => {
        console.log('--------------------error_callback', response);
        set_loading(false)
        toast.error("مشکلی پیش آمده است");
      }
    })
  }

  // -----------------------------------------------------------------------------------------------------------------

  return (
    <div className="pt-3 px-4 pb-4 border rounded-4 flex-grow-1">
      <Form autoComplete="off">
        <Row className="g-3">
          <FormControl id="accountProfileMobile" name="mobile" as={Col} md={6} type="tel" inputMode="tel"
                       label={<>شماره همراه<span
                         className="fs-sm fw-bold text-success ms-2 d-inline-block">تایید شده</span></>}
                       value={form?.mobile}
                       onChange={on_change_form}
                       key={'update-profile-input-mobile'}
          />
          <Col md={6}/>
          <FormControl id="accountProfileEmail" name="email" as={Col} md={6} type="email" inputMode="email"
                       label={<>آدرس ایمیل</>}
                       value={form?.email}
                       onChange={on_change_form}
                       key={'update-profile-input-email'}

          />
          <Col md={6}/>
          <FormControl id="accountProfilelast_name" name="nickname" as={Col} md={6} label="نام نمایشی" dir="auto"
                       helpText="این نام در قسمت دیدگاه ها و پرسش ها نمایش داده می شود"
                       value={form?.nickname}
                       onChange={on_change_form}
                       key={'update-profile-input-last_name'}
                       disabled

          />
          <Col md={6}/>
          <FormControl id="accountProfileName" name="name" as={Col} md={6} label="نام" dir="auto"
                       value={form?.name}
                       onChange={on_change_form}
                       key={'update-profile-input-name'}

          />
          <FormControl id="accountProfileFamily" name="last_name" as={Col} md={6} label="نام خانوادگی" dir="auto"
                       value={form?.last_name}
                       onChange={on_change_form}
                       key={'update-profile-input-last_name'}
          />
          <FormControl control="SELECT" id="accountProfileGender" name="gender" as={Col} md={6} label="جنسیت"
                       value={form?.gender}
                       onChange={on_change_form}
                       key={'update-profile-input-gender'}
                       options={[{label: 'خانم', value: '2'}, {label: 'آقا', value: '1'}, {
                         label: 'هیچکدام',
                         value: '3'
                       }]}/>

          <Form.Group as={Col} md={6} controlId="exampleForm.ControlInput1 key={'update-profile-input-birthday'}">
            <Form.Label>تاریخ تولد</Form.Label>
            <Form.Control type="text"
                          name={'birthday'}
                          value={form?.birthday}
                          onChange={on_change_form}
            />
          </Form.Group>
          <div>
            <Button
              type={'button'}
              onClick={submitHandler}
              disabled={loading}
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
