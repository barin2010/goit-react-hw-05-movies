import React from "react";
import { DNA } from 'react-loader-spinner';
import css from 'components/Loader/Loader.module.css';
import { STATUSES } from "helpers/constants"; 

export const Loader = ({ status }) => {
if (status !== STATUSES.pending) {
    return null;
  }
  return (
      
      <div className={css.loader}>
      <DNA
  visible={true}
  height="80"
  width="80"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
  />
    </div>);
  
}
