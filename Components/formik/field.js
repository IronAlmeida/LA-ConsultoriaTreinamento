import React from "react";
import {useField} from "formik";
import InputMask from 'react-input-mask';

export function Campos ({label, component: InputComponent, ...props}){
    const [inputProps, meta] = useField(props);
    const id = props.id || props.name;

    return(
        <>
            {meta.touched && meta.error && (
                <div className="xl:w-3/4 m-auto text-white text-sm font-normal">{meta.error.toString()}</div>
            )}
            <div className= "xl:w-3/4 m-auto mb-6 pt-3 rounded bg-gray-200">
                {label && (
                    <label className="block text-gray-800 text-base font-semibold mb-2 ml-3" htmlFor={id}>{label}<span className="text-red-700">*</span></label>
                )}

                {id === 'nome' && (
                    <input id={id} {...inputProps} {...props} />
                )}

                {id === 'email' && (
                    <input id={id} {...inputProps} {...props} />
                )}

                {id === 'fixo' && (
                    <InputMask mask="(99) 9999-9999" id={id} {...inputProps} {...props} />
                )}

                {id === 'celular' && (
                    <InputMask mask="(99) 99999-9999" id={id} {...inputProps} {...props} />
                )}

                {id === 'cpf' && (
                    <InputMask mask="999.999.999-99" id={id} {...inputProps} {...props} />
                )}
                
                {id === 'cnpj' && (
                    <InputMask mask="99.999.999/9999-99" id={id} {...inputProps} {...props} />
                )}

                {id === 'funcao' && (
                    <input id={id} {...inputProps} {...props} />
                )}

            </div>
        </>
    );
}

Campos.defaultProps = {
    component: 'input'
}

export function MySelect ({ label, ...props }){
    const [field, meta] = useField(props);
    const id = props.id || props.name;

    return (
      <div className="xl:w-3/4 m-auto mb-6 pt-3">
          {label && (
              <label className="text-white text-base font-semibold mb-2" htmlFor={id}><span className="text-red-700 mr-2">*</span>{label}</label>
          )}<br/><br/>
        <select className="w-1/2 m-auto rounded focus:outline-none" {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </div>
    );
  };