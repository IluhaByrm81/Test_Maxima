import React from "react";
import {useSelector, useDispatch} from "react-redux"
import { ButtonOne, ButtonTwo } from "../Buttons";
import { Modal, ModalOne, ModalTwo } from "../Modal";
import { mainPageActions } from "../../store/mainpage/actions"
import { modalOneActions } from "../../store/modal/actions";

import "./MainPage.scss";

export const MainPage = () => {

   const {setview} = useSelector((state) => state.setview)
   const {setModalOne} = useSelector((state) => state.setModalOne)
   const {setModalTwo} = useSelector((state) => state.setModalTwo) 
   const {clickAlert} = useSelector((state) => state.clickAlert)

   const dispatch = useDispatch()
   
   const handleClickModalOneOpen = () => {
      dispatch(mainPageActions.setModalOne(true))
   }
   const handleClickModalTwoOpen = () => {
      dispatch(mainPageActions.setModalTwo(true))
   }
   
   const handleClickButtonOneAlert = () => {
      dispatch(modalOneActions.clickAlert(alert("Ok...")))
   }

   const handleClickButtonCloseModalOne = () => {
      dispatch(mainPageActions.setModalOne(false))
   }

   const handleClickButtonCloseModalTwo = () => {
      dispatch(mainPageActions.setModalTwo(false))
   }

   const handelClickChangeView = () => {
      dispatch(mainPageActions.setView(false))
   }

   return (
    <div className="wraper">
      {setview ? (
        <>
          <ButtonOne
           handleClickModalOneOpen={handleClickModalOneOpen}
         handleClickModalTwoOpen={handleClickModalTwoOpen}
           />
            <Modal 
            isOpened={setModalOne}
            >
               <ModalOne
               handleClickButtonOneAlert={handleClickButtonOneAlert} handleClickButtonCloseModalOne={handleClickButtonCloseModalOne}
               />
            </Modal>
            <Modal
             isOpened={setModalTwo}
             >
               <ModalTwo 
               handleClickButtonOneAlert={handleClickButtonOneAlert}
               handelClickChangeView={handelClickChangeView}
               handleClickButtonCloseModalTwo={handleClickButtonCloseModalTwo} />
            </Modal>
        </>
      ) : (
        <ButtonTwo />
      )}
    </div>
  );
}
