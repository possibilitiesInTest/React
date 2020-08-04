import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteEducation } from '../../actions/profile';

const Education = ({ education, deleteEducation }) => {
    const education = education.map(edu => (
        <td key={edu._id}>
            <td>{edu.school}</td>
            <td className="hide-sm">{edu.degree}</td>
            <td>
            <Moment format='YYYY/MM/DD'>{edu.from}</Moment> - {
                exp.to === null ? ('Now') : (<Moment format='YYYY/MM/DD'>{exp.to}</Moment>)
            }
            </td>
            <td>
                <button 
                onClick={() => deleteEducation(edu._id)} 
                className="btn btn-danger">Delete</button>
            </td>
        </td>
    ))


    return (
        <div>
            <h2 className="my-2">Education Credentials</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>School</th>
                        <th className="hide-sm">Degree</th>
                        <th className="hide-sm">Years</th>
                    </tr>
                </thead>
                <tbody>{educations}</tbody>
            </table>
        </div>
    )
}

Experience.propTypes = {
    education: PropTypes.array.isRequired,
    deleteEducation: PropTypes.func.isRequired,

}

export default connect(null, {deleteEducation})(Education)