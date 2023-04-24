import React, {useState} from 'react';
import {Header} from '../../header';
import { useDispatch} from 'react-redux';
import { addcont } from '../../store/contactReducer';
interface IFormInput {
    firstName: string;
    lastName: string;
    status: string;
}

const AddNewContact = () => {
    // title
    document.title = "Add new contact";

    const [formData, setFormData] = useState < IFormInput > ({firstName: '', lastName: '', status: 'Active'});
    const [status, setstatus] = useState<boolean>(false);
    const dispatch = useDispatch();

    // Handle form submit function
    const submitForm = (e : any) => {
        e.preventDefault();
        dispatch(addcont(formData));
        setFormData({firstName: '', lastName: '', status: 'Active'});
        setstatus(true);
        setTimeout(() => {
            setstatus(false);
        }, 4000);
    }

    return (
        <>
            <Header/>
            <div className='w-full justify-center min-h-full'>
                <form method="POST"
                    onSubmit={(e) => submitForm(e)}>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4">
                                First Name
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input name='lastName'
                                onChange={ (e) => setFormData({ ...formData, firstName: e.target.value})}
                                value={formData?.firstName}
                                className="border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                type="text"
                                required/>
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4">
                                Last Name
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input name='lastName'
                                onChange={
                                    (e) => setFormData({
                                        ...formData,
                                        lastName: e.target.value
                                    })
                                }
                               value={
                                    formData ?. lastName
                                }
                                className="border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                type="text"
                                required/></div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4">
                                Status
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <div className="flex items-center mb-4">
                                <input id="default-radio-1" type="radio" value="Active" name="status"
                                    onChange={
                                        (e) => setFormData({
                                            ...formData,
                                            status: e.target.value
                                        })
                                    }
                                    checked={
                                        formData.status === "Active"
                                    }
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Active</label>
                            </div>
                            <div className="flex items-center">
                                <input id="default-radio-2" type="radio" value="Inactive"
                                    onChange={
                                        (e) => setFormData({
                                            ...formData,
                                            status: e.target.value
                                        })
                                    }
                                    checked={
                                        formData.status === "Inactive"
                                    }
                                    name="status"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">InActive</label>
                            </div>
                        </div>
                    </div>
                    <div className="md:flex md:items-center">
                        <div className="md:w-1/3"></div>
                        <div className="md:w-2/3">
                            <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                                Save Contact
                            </button>
                        </div>
                    </div>
                    {
                        status &&
                        <p className='text-green-700 font-bold'>Your contact added successfully!</p>
                    }
                </form>
            </div>
        </>
    )
}

export default AddNewContact
