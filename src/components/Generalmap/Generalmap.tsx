import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import InputFields from "./InputField";
import MediaField from "./MediaFIeld";

type GeneralMapProps = {
  value: {
    [key: string]: {
      Heading: any;
      Parent: any;
      child: {
        type: any;
        name: any;
        className: any;
        // placeholder: string;
      }[];
      btnContainer?: any;
      btnClass?: any;
      btnContent?: any;
      Btnstyle?: {
        [key: string]: any;
      };
    }[];
  }[];
};

const Generalmap: React.FC<GeneralMapProps> = ({ value }) => {
  const inputFields: {
    [key: string]: any;
  } = {
    text: InputFields,
    file: MediaField,
  };

  const initialValues: { [key: string]: string } = {};

  // Provide initial values for form fields
  value?.forEach((childData) => {
    Object?.values(childData)?.forEach((section) => {
      section?.forEach((self) => {
        self.child?.forEach((values) => {
          initialValues[values.name] = ""; // Set initial value for each field
        });
      });
    });
  });

  const validationSchema = Yup.object().shape({
    // Add validation rules for your form fields here
  });

  const handleSubmit = (values: any) => {
    console.log("Form submitted with values:", values);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          {value?.map((childData) => {
            return Object?.values(childData)?.map((section) => {
              return section?.map((self, index) => (
                <div key={index} className="container mt-4">
                  <div className="card">
                    <div className="card-body">
                      <div key={index} className="row justify-content-center">
                        <h1 className="col-3 ">{self.Heading}</h1>
                        <div key={index} className={self.Parent}>
                          {self.child?.map((values, index) => {
                            const FieldComponent = inputFields[values.type];

                            return (
                              <div className={values.className} key={index}>
                                {values.type == "Area" ? (
                                  <textarea
                                    placeholder={values.name}
                                    className="form-control"
                                    id="exampleFormControlTextarea1"
                                    rows={3}
                                  ></textarea>
                                ) : (
                                  <Field
                                    as={FieldComponent}
                                    type={[values.type, values.name]}
                                  />
                                )}
                                <ErrorMessage
                                  name={values.name}
                                  component="div"
                                  className="error-message"
                                />
                              </div>
                            );
                          })}
                        </div>
                        <div className={self?.btnContainer}>
                          <button
                            type="submit"
                            className={self?.btnClass}
                            style={self?.Btnstyle}
                          >
                            {self?.btnContent}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ));
            });
          })}
        </Form>
      </Formik>
    </div>
  );
};

export default Generalmap;
