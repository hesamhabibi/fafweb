"use client"

import {useCallback, useEffect, useState} from "react";

import ModalAddress from "../../../modals/Address/Address";

import {Alert, Button, Col, Row} from "react-bootstrap";
import Icon from "../../../common/Icon";
import useForm from "@core/hooks/useForm";
import useAddressFunctions from "@core/hooks/useAddressFunctions";
import {toast} from "react-toastify";

export default function PageAccountAddresses() {

  const {
    get_user_addresses_api,
    get_iranian_states_and_cities_user_addresses_api,
    create_address_api,
    update_address_api,
    delete_address_api,
    set_default_address_api
  } = useAddressFunctions();

  const [addresses, set_addresses] = useState([]);
  const [states_cities, set_states_cities] = useState({});
  const [loading, set_loading] = useState(true);
  const [form, , on_change_form] = useForm({});


  useEffect(() => {
    get_user_addresses_api({
      success_callback: (response) => {
        set_loading(false);

        console.log('--------------success_callback', response);
      },
      error_callback: (response) => {
        set_loading(false)
        toast.error("مشکلی پیش آمده است");
      }
    })
  }, [])


  // -----------------------------------------------------------------------------------------------------------------

  const arrayAddresses = [
    {
      title: 'منزل دایی',
      address: 'بلوار جمهوری اسلامی ایران- پلاک 377',
      person: 'آقای حسام حبیبی',
      mobile: '09177130342',
      city: 'شیراز',
      postalCode: '7178799098'
    },
    {
      title: 'منزل دایی',
      address: 'بلوار جمهوری اسلامی ایران- پلاک 377',
      person: 'آقای حسام حبیبی',
      mobile: '09177130342',
      city: 'شیراز',
      postalCode: '7178799098'
    },
    {
      title: 'منزل دایی',
      address: 'بلوار جمهوری اسلامی ایران- پلاک 377',
      person: 'آقای حسام حبیبی',
      mobile: '09177130342',
      city: 'شیراز',
      postalCode: '7178799098'
    },
    {
      title: 'منزل دایی',
      address: 'بلوار جمهوری اسلامی ایران- پلاک 377',
      person: 'آقای حسام حبیبی',
      mobile: '09177130342',
      city: 'شیراز',
      postalCode: '7178799098'
    },
  ]

  // -----------------------------------------------------------------------------------------------------------------

  const [modalAddressShow, setModalAddressShow] = useState(false)

  const [modalData, setModalData] = useState()

  const modalAddressShowHandler = useCallback(item => {

    if (item.target) {

      if (modalData) setModalData(undefined)

    } else
      setModalData(item)

    setModalAddressShow(true)

  }, [modalData])

  const modalAddressHideHandler = res => {

    setModalAddressShow(false)

  }

  // -----------------------------------------------------------------------------------------------------------------

  return (
    <>
      <div id="pageAccountAddresses"
           className={`flex-grow-1 d-flex flex-column${arrayAddresses.length ? '' : ' rounded-4 border'}`}>
        {
          arrayAddresses.length ? (
            <>
              <div className="rounded-4 p-4 border-top border-start border-end">
                <div className="d-flex align-items-center pb-1-25">
                  {/*<Button variant="link" className="bg-primary bg-opacity-12" onClick={modalAddressShowHandler}><Icon name="Plus" className="me-2"/>افزودن نشانی جدید</Button>*/}
                  <Button onClick={modalAddressShowHandler}><Icon name="Plus" className="me-2"/>افزودن نشانی
                    جدید</Button>
                  <Alert variant="light" className="border-0 mb-0 ms-4 p-0 bg-transparent text-body-54-opaque">
                    <Icon name="Info" className="me-2"/>
                    نشانی ها برای ارسال سفارش ها استفاده می شوند.
                  </Alert>
                </div>
              </div>
              {
                arrayAddresses.map((item, index) => (
                  <div
                    className={`rounded-4 px-4 pb-4 border-start border-end${index === 0 ? ' default' : ''}${index === arrayAddresses.length - 1 ? ' border-bottom' : ''}`}
                    key={index}>
                    {/*<div className={`rounded-4 px-4 pb-4 border-start border-end${index === arrayAddresses.length - 1 ? ' border-bottom' : ''}`} key={index}>*/}
                    <hr className="mt-n1-25 mb-3 border-top-0 opacity-100 text-transparent"/>
                    <Row className="g-3 align-items-center pb-3-75">
                      <Col xs className="fw-semibold d-flex align-items-center">
                        {/*{*/}
                        {/*    index ? (*/}
                        {/*        <></>*/}
                        {/*    ) : (*/}
                        {/*        <Icon name="CheckCircle2" className="me-2 default" fill="var(--bs-success)" stroke="var(--bs-body-bg)"/>*/}
                        {/*    )*/}
                        {/*}*/}
                        <span className="border-end pe-3 me-3">{item.title}</span>
                        {item.address}
                      </Col>
                      <Col xs="auto" className="ms-auto text-nowrap">
                        {
                          index ? (
                            <Button variant="icon"><Icon name="CheckCircle2"/></Button>
                          ) : (
                            <></>
                          )
                        }
                        <Button variant="icon" onClick={() => modalAddressShowHandler(item)}><Icon
                          name="Pencil"/></Button>
                        <Button variant="icon"><Icon name="Trash"/></Button>
                      </Col>
                    </Row>
                    <Row className="g-3 g-md-5">
                      <Col xs className="text-body-54-opaque">
                        <div>{item.person}</div>
                        <div className="pt-2">شهر {item.city}</div>
                        <div className="pt-2">کدپستی {item.postalCode}</div>
                        <div className="pt-2">شماره موبایل {item.mobile}</div>
                      </Col>
                      <Col xs="auto" className="flex-shrink-0">
                        <figure className="ratio ratio-1x1 rounded-3 overflow-hidden bg-body-tertiary mb-0"/>
                      </Col>
                    </Row>
                  </div>
                ))
              }
            </>
          ) : (
            <div className="d-flex flex-column align-items-center text-center my-auto pb-5">
              <Icon name="Signpost" size={72} className="mb-2 opacity-12"/>
              <div className="fs-5 mb-4 text-body-54-opaque fw-extra-light">نشانی ثبت نشده است</div>
              <Button variant="outline-primary" onClick={modalAddressShowHandler}><Icon name="Plus" className="me-2"/>افزودن
                نشانی جدید</Button>
            </div>
          )
        }
      </div>
      <ModalAddress show={modalAddressShow} onHide={res => modalAddressHideHandler(res)} data={modalData}/>
    </>
  )
}
