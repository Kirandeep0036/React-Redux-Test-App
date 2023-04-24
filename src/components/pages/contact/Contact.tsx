import React from 'react';
import {Sidebar} from '../../sidebar';
import {Link, NavLink, useNavigate} from 'react-router-dom';
import {Header} from '../../header';
import {useDispatch, useSelector} from 'react-redux';
import { deleteCont } from '../../store/contactReducer';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';

const  Contact = () => {
    document.title = "Contact Listing";
    const {contacts} = useSelector((state : any) => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Function to delete the contact using confimation alert
    const deletedContact=( key:number )=>{
        confirmAlert({
            title: 'Confirm to Delete',
            message: 'Are you sure to delete this contact!',
            buttons: [
              {
                label: 'Yes',
                onClick: () => dispatch(deleteCont(key))
              },
              {
                label: 'No',
                onClick: () => { return false} 
              }
            ]
          });
        
    }


    return (
        <>
            <Header/>

            <div className="w-full min-h-screen">
                <div className='mb-10'>
                    <NavLink to="/add-contact" className="underline font-semibold hover:text-sky-900">
                        Add New contact
                    </NavLink>
                </div>
                {
                contacts ?. data?.items?. length < 1  ? <p>No data found!</p> : (
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        First Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Last Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Status
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody> {
                                contacts ?. data?.items?. map((item : any, index : number) => {
                                    return (
                                        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                            <td className="px-6 py-4">
                                                {item ?. firstName} 
                                            </td>
                                            <td className="px-6 py-4">
                                                {item ?. lastName} 
                                            </td>
                                            <td className="px-6 py-4">
                                                {item ?. status}
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                                    onClick={ () => navigate(`/edit-contact/${index}`)}>
                                                    View
                                                </span>
                                                <span className="font-medium text-blue-600 dark:text-blue-500 hover:underline ml-5"
                                                    onClick={ () =>deletedContact(index)}>
                                                    Delete
                                                </span>
                                            </td>
                                        </tr>
                                    )
                                })
                            } </tbody>
                        </table>
                    </div>
                )
            } </div>
        </>
    )
}

export default Contact
