const assignmentSubmissionContent = {
    certificateInfo: [
        {
            widthClass: 'col-lg-12',
            className: 'form-control',
            idName: 'ordercertificate',
            name: 'ordercertificate',
            label: 'Did you order your certificate? ',
            placeholder: '',
            type: 'select',
            options: [
                {
                    value: 'Yes',
                    label: 'Yes'
                },
                {
                    value: 'No',
                    label: 'No'
                }
            ]
        }, 
        {
            widthClass: 'col-lg-12',
            className: 'form-control',
            idName: 'endorsedcertificate',
            name: 'endorsedcertificate',
            label: 'Endorsed Certificate: ',
            placeholder: '',
            type: 'select',
            options: [
                {
                    value: 'Endorsed Level 7 Certificate',
                    label: 'Endorsed Level 7 Certificate'
                },
                {
                    value: 'Endorsed Level 6 Certificate',
                    label: 'Endorsed Level 6 Certificate'
                },
                {
                    value: 'Endorsed Level 5 Certificate',
                    label: 'Endorsed Level 5 Certificate'
                },
                {
                    value: 'Endorsed Level 4 Certificate',
                    label: 'Endorsed Level 4 Certificate'
                },
                {
                    value: 'Endorsed Level 3 Certificate',
                    label: 'Endorsed Level 3 Certificate'
                },
                {
                    value: 'Endorsed Level 2 Certificate',
                    label: 'Endorsed Level 2 Certificate'
                },
                {
                    value: 'Endorsed Level 1 Certificate',
                    label: 'Endorsed Level 1 Certificate'
                },
                {
                    value: 'none',
                    label: 'none'
                }
            ]
        }, 
        {
            widthClass: 'col-lg-12',
            className: 'form-control',
            idName: 'cpdcertificate',
            name: 'cpdcertificate',
            label: 'CPD Certificate: ',
            placeholder: '',
            type: 'select',
            options: [
                {
                    value: 'CPD PDF Certificate',
                    label: 'CPD PDF Certificate'
                },
                {
                    value: 'CPD Hardcopy Certificate',
                    label: 'CPD Hardcopy Certificate'
                },
                {
                    value: 'Both CPD (PDF + Hardcopy) Certificates',
                    label: 'Both CPD (PDF + Hardcopy) Certificates'
                },
                {
                    value: 'none',
                    label: 'none'
                }
            ]
        }, 
        {
            widthClass: 'col-lg-12',
            className: 'form-control',
            idName: 'shipping',
            name: 'shipping',
            label: 'Shipping: ',
            placeholder: '',
            type: 'select',
            options: [
                {
                    value: 'Free UK Delivery',
                    label: 'Free UK Delivery'
                },
                {
                    value: 'International Deliverye',
                    label: 'International Deliverye'
                },
                {
                    value: 'International DHL Express',
                    label: 'International DHL Express'
                },
                {
                    value: 'none',
                    label: 'none'
                }
            ]
        }, 
    ],
    personalInfo : [
        {
            widthClass: 'col-lg-12',
            className: 'form-control',
            idName: 'name',
            name: 'name',
            placeholder: 'Please enter your full Name',
            type: 'text'
        }, 
        {
            widthClass: 'col-lg-6',
            className: 'form-control',
            idName: 'email',
            name: 'email',
            placeholder: 'Email Address',
            type: 'email'
        }, 

        {
            widthClass: 'col-lg-12',
            className: 'form-control',
            idName: 'asinmnetfile',
            name: 'asinmnetfile',
            label: 'Upload Your Assignment:',
            placeholder: 'Upload Your Assignment:',
            type: 'file'
        }, 
        {
            widthClass: 'col-lg-12',
            className: 'form-control',
            idName: 'cname',
            name: 'cname',
            placeholder: 'Course Name',
            type: 'text'
        }
    ],

    paymentInfo: [
        {
            widthClass: 'col-lg-12',
            className: 'form-control',
            idName: 'address',
            name: 'address',
            label: 'Address:',
            placeholder: 'Delivery Address:(Street Address, City, ZIP Code, County, Country)',
            type: 'textarea'
        },
        {
            widthClass: 'col-lg-12',
            className: 'form-control',
            idName: 'dcard',
            name: 'dcard',
            label: 'Payment Method : ',
            placeholder: '',
            type: 'select',
            options: [
                {
                    value: 'Card',
                    label: 'Debit or Credit Card'
                },
                {
                    value: 'paypal',
                    label: 'Paypal'
                }
            ]
        }, 
        {
            widthClass: 'col-lg-12',
            className: 'form-control',
            idName: 'ccard',
            name: 'ccard',
            label: 'Credit or Debit Card:',
            placeholder: 'Card Number',
            type: 'text',
        }, 
        {
            widthClass: 'col-lg-12',
            className: 'form-control',
            idName: 'cardname',
            name: 'cardname',
            label: 'Cardholder Name:',
            placeholder: 'Cardholder Name:',
            type: 'text',
        }, 
        {
            widthClass: 'col-lg-12',
            className: 'form-control',
            idName: 'securitycode',
            label: 'Security Code:',
            name: 'securitycode',
            placeholder: 'Security Code',
            type: 'text'
        }, 
        {
            widthClass: 'col-lg-12',
            className: 'form-control',
            idName: 'expirationdate',
            label: 'Expiration Date:',
            name: 'expirationdate',
            placeholder: '',
            type: 'date'
        }, 
        {
            widthClass: 'col-lg-12',
            className: 'form-control',
            idName: 'addin',
            name: 'addin',
            label: 'Order Notes',
            placeholder: 'Order notes',
            type: 'textarea'
        },

    ], 
    buttonInfo: {
        className: 'btn btn-sm btn-primary'
    }
}
export default assignmentSubmissionContent;

