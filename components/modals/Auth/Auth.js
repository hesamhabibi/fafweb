"use client"

import {useCallback, useMemo, useState} from "react";

import {toast} from "react-toastify";

import {Modal, Button, Form, Spinner} from "react-bootstrap";

import ImgLogo from "../../../assets/img/fafa-logo-sign-title.svg";
import Icon from "../../common/Icon";

import useForm from "@core/hooks/useForm";
import useAuthFunctions from "@core/hooks/useAuthFunctions";
import {is_email, is_mobile} from "@core/helpers/regex";
import InputMask from "react-input-mask";


export default function ModalAuth({show, onHide, onHideSidebar, ...props}) {

  const [loading, set_loading] = useState(false)
  const [form_type, set_form_type] = useState('login')
  const [login_form, set_login_form, on_change_login_form] = useForm();
  const {
    login_username_password,
    has_user_with_username,
    login_send_sms,
    login_verify_sms
  } = useAuthFunctions();

  // -----------------------------------------------------------------------------------------------------------------

  const onShowHandler = () => {
    document.querySelector('#modalAuth #modalAuthUsername').focus()
  }

  // -----------------------------------------------------------------------------------------------------------------

  const [step, setStep] = useState(1);

  useMemo(() => {
    if (show === false && step > 1) {
      setStep(1);
      if (form_type !== 'register') {
        set_form_type('login');
      }
    }
  }, [show]);

  console.log(step);

  const submitHandler = useCallback(async e => {

    e.preventDefault()

    const {username, password, code} = login_form;

    if (step === 1) {
      if (username?.length > 0) {
        set_loading(true)
        await has_user_with_username({
          data: {username},
          success_callback: (response) => {
            if (response?.hasUser) {
              set_form_type('login');
            } else {
              set_form_type('register');
            }

            document.querySelector('#modalAuth .step-1').classList.add('out');
            document.querySelector('#modalAuth .step-2').classList.remove('out');

            let timeout;

            timeout = setTimeout(() => {

              clearTimeout(timeout)

              document.querySelector('#modalAuth #modalAuthPassword').focus()

            }, 200)


            setStep(2)
            set_loading(false)
          },
          error_callback: (response) => {
            set_loading(false)
            toast.error("مشکلی پیش آمده است!");
          }
        })

      } else {
        toast.error('لطفا فیلد موبایل یا آدرس ایمیل را پر کنید')
      }
    }

    if (step === 2) {
      if (password?.length > 0) {
        set_loading(true)
        await login_username_password({
          data: {username, password},
          success_callback: (response) => {
            onHide();
            set_loading(false)
          },
          error_callback: (response) => {
            set_loading(false)
            toast.error("کلمه عبور یا نام کاربری درست نیست");
          }
        })
      } else {
        toast.error('لطفا فیلد رمز عبور را پر کنید')
      }
    }

    if (step === 3) {
      if (code?.length > 0) {
        set_loading(true)
        await login_verify_sms({
          data: {mobile: username, token: code},
          success_callback: (response) => {
            onHide();
            set_loading(false)
          },
          error_callback: (response) => {
            set_loading(false)
            toast.error("کد ارسالی صحیح نمیباشد");
          }
        })
      } else {
        toast.error('لطفا فیلد کد را پر کنید')
      }
    }


  }, [step, login_form])

  const changeUsernameHandler = () => {

    document.querySelector('#modalAuth .step-1').classList.remove('out');
    document.querySelector('#modalAuth .step-2').classList.add('out');
    document.querySelector('#modalAuth .step-3').classList.add('out');

    let timeout;

    timeout = setTimeout(() => {

      clearTimeout(timeout)

      document.querySelector('#modalAuth #modalAuthUsername').focus()

    }, 200)

    setStep(1)

  }

  const useOTPHandler = async () => {
    const {username, password, code} = login_form;

    set_loading(true)
    await login_send_sms({
      data: {mobile: username},
      success_callback: (response) => {
        document.querySelector('#modalAuth .step-1').classList.add('out');
        document.querySelector('#modalAuth .step-3').classList.remove('out');
        document.querySelector('#modalAuth .step-2').classList.add('out');

        console.log('--------- login_send_sms => success_callback', response);

        let timeout;

        timeout = setTimeout(() => {

          clearTimeout(timeout)

          document.querySelector('#modalAuth #modalAuthOTP').focus()

        }, 200);

        setStep(3)
        toast.warn(response?.auth?.message);
        set_loading(false)
      },
      error_callback: (response) => {
        set_loading(false)
        toast.error("مشکلی پیش آمده است!");
      }
    })

  }

  // -----------------------------------------------------------------------------------------------------------------

  return (
    <Modal id="modalAuth" aria-labelledby="modalAuthTitle" show={show} onShow={onShowHandler} onHide={onHide}
           backdrop="static" keyboard={false} centered {...props} contentClassName="z-1 overflow-hidden">
      <Modal.Header closeButton className="z-1">
        <Modal.Title as="h6" id="modalAuthTitle" className="invisible">ثبت نام/ ورود</Modal.Title>
      </Modal.Header>
      <Modal.Body id="formModalAuth" as={Form} className="px-4 pb-4" onSubmit={submitHandler}>
        <div className="mt-n5 mb-5"><ImgLogo className="text-primary mt-n1 logo"/></div>
        <div className="h4 mb-3 ws-n1">ثبت نام یا ورود</div>
        <div className="position-relative">
          <div className="position-absolute top-0 start-0 end-0 bottom-0 d-flex flex-column step-1">
            <p className="mb-auto">برای ادامه شماره موبایل یا آدرس ایمیل خود را وارد کنید:</p>
            <Form.Group controlId="modalAuthUsername">
              <Form.Control type="text" name={'username'} onChange={on_change_login_form}
                            className="ltr border-0 bg-white"/>
            </Form.Group>
            <Button type="submit" variant="secondary" form="formModalAuth"
                    disabled={login_form?.username?.length === 0}
                    className="w-100 mt-3-75">
              {loading ? <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                /> :
                'ادامه'}
            </Button>
            <div className="w-100 text-center pt-4 my-n1-50 fs-sm ws-n1">ثبت نام یا ورود شما به معنای پذیرفتن <a
              href="">شرایط و قوانین شهر فافا</a> است
            </div>
          </div>
          <div className="position-absolute top-0 start-0 end-0 bottom-0 d-flex flex-column step-3 out">
            <p className="mb-auto">
              {is_mobile(login_form?.username) && ` رمز عبور ارسال شده به شماره ${login_form?.username} را وارد کنید: `}
              {!is_email(login_form?.username) && ` رمز عبور ارسال شده به شماره متصل به ${login_form?.username} را وارد کنید: `}
            </p>
            <Form.Group>
              <InputMask id="modalAuthOTP"
                         name={'code'}
                         onChange={(e) => {
                           console.log(1111, e?.target?.value);
                           on_change_login_form({
                             target: {
                               ...e?.target,
                               name: 'code',
                               value: e?.target?.value?.replaceAll('‒', '')
                             }
                           })
                         }}
                         type="text" mask="9999"
                         maskChar="‒"
                         alwaysShowMask={true}
                         className="form-control ltr border-0 bg-white text-center py-0 lh-0 fs-4 fw-normal ls-3 font-en"
                         inputMode="numeric"/>
            </Form.Group>
            <div className="d-flex">
              <Button variant="link" className="mt-3-75 px-0 ws-n1-2" onClick={changeUsernameHandler}><Icon
                name="ArrowRight" className="me-2"/>
                تغییر
                {is_mobile(login_form?.username) && ' شماره موبایل '}
                {is_email(login_form?.username) && ' ایمیل '}
                {(!is_email(login_form?.username) && !is_mobile(login_form?.username)) && ' نام کاربری '}
              </Button>
              <Button variant="link" className="mt-3-75 px-0 ms-auto">ارسـال دوبـاره<Icon name="Repeat"
                                                                                          className="ms-2"/></Button>
            </div>
            <Button type="submit" variant="secondary" form="formModalAuth"
                    disabled={login_form?.code?.length < 4 || loading}
                    className="w-100 mt-3-75 ls-1-2">
              {loading ? <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                /> :
                'ورود'}
            </Button>
          </div>
          <div className="step-2 out">
            <p className="mb-3">رمز عبور خود را وارد کنید:</p>
            <Form.Group controlId="modalAuthPassword">
              <Form.Control type="password" name={'password'} onChange={on_change_login_form}
                            className="ltr border-0 bg-white"/>
            </Form.Group>
            <Button variant="link" className="mt-3-75 px-0 ws-n1-2" onClick={changeUsernameHandler}><Icon
              name="ArrowRight" className="me-2"/>
              تغییر
              {is_mobile(login_form?.username) && ' شماره موبایل '}
              {is_email(login_form?.username) && ' ایمیل '}
              {(!is_email(login_form?.username) && !is_mobile(login_form?.username)) && ' نام کاربری '}
            </Button>
            <Button type="submit" variant="secondary" form="formModalAuth"
                    disabled={login_form?.password?.length === 0 || loading}
                    className="w-100 mt-3-75 ls-1-2">{loading ? <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              /> :
              'ورود'}</Button>
            <Button variant="link" className="w-100 mt-3-75 mb-n3-75 text-reset ws-n1 px-0"
                    onClick={useOTPHandler}><span className="text-body-54-opaque me-2 fs-8">فراموش کرده اید؟</span>ورود
              با رمز عبور یکبار مصرف</Button>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="px-sm-4 d-none">
        {/*<Button type="submit" variant="secondary" form="formModalAuth" className="w-100 m-sm-0">تایید و دریافت کد</Button>*/}
        <div className="w-100 m-0 text-center py-3 mt-2 fs-sm ws-n1">ثبت نام یا ورود شما به معنای پذیرفتن <a href="">شرایط
          و قوانین شهر فافا</a> است
        </div>
      </Modal.Footer>
    </Modal>
  )
}