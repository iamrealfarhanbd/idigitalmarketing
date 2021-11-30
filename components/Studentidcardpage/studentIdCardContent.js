const studentIdCardContent = {
    personalInfo : [
        {
            widthClass: 'col-lg-12',
            className: 'form-control',
            idName: 'name',
            name: 'name',
            label: '',
            placeholder: 'Please enter your full Name',
            type: 'text'
        }, 
        {
            widthClass: 'col-lg-6',
            className: 'form-control',
            idName: 'email',
            name: 'email',
            label: '',
            placeholder: 'Email Address',
            type: 'email'
        }, 
        {
            widthClass: 'col-lg-12',
            className: 'form-control',
            idName: 'dateofbirth',
            name: 'dateofbirth',
            label: '',
            placeholder: 'Date of Birth',
            type: 'date'
        }, 
        {
            widthClass: 'col-lg-12',
            className: 'form-control',
            idName: 'pphoto',
            name: 'pphoto',
            label: '',
            placeholder: 'Profile Photo',
            type: 'file'
        }, 
        {
            widthClass: 'col-lg-12',
            className: 'form-control',
            idName: 'additionali',
            name: 'additionali',
            label: '',
            placeholder: 'additional info',
            type: 'textarea'
        }
    ],

    paymentInfo: [
        {
            widthClass: 'col-lg-12',
            className: 'form-control',
            idName: 'address',
            name: 'address',
            label: 'Delivery Address:',
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
            idName: 'vcode',
            name: 'vcode',
            label: 'Voucher Code',
            placeholder: 'Voucher Code',
            type: 'text'
        }, 
        {
            widthClass: 'col-lg-12',
            className: 'form-control',
            idName: 'delivery',
            name: 'delivery',
            label: 'Delivery Method : ',
            placeholder: '',
            type: 'select',
            options: [
                {
                    value: 'uk',
                    label: 'uk delivery'
                },
                {
                    value: 'international',
                    label: 'international standard'
                }
            ]
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
export default studentIdCardContent;

