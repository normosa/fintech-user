import iconDashboard from '../../../assets/icons/dashboard.svg'
import iconPayer from '../../../assets/icons/payer.svg'
import iconSettings from '../../../assets/icons/config.svg'

const DefaultStore = {
    showMenu: false,
    activeItem: 0,
    items: [
        {
            text: "Dashboard",
            icon: iconDashboard,
            subItems: []
        },
        {
            text: "My Account",
            icon: iconPayer,
            subItems: [
                {
                    url: "/transactions/deposit",
                    text: "Balance Enquiry"
                },
                {
                    url: "/transactions/all",
                    text: "Transaction Details"
                },
                {
                    url: "/transactions/withdraw",
                    text: "Generate Statement"
                }
            ]
        },
        {
            text: "Transfers",
            icon: iconPayer,
            subItems: [
                {
                    url: "/transfers/same",
                    text: "Same Bank"
                },
                {
                    url: "/transfers/other",
                    text: "Other Bank"
                },
                {
                    url: "/transfers/international",
                    text: "International"
                }
            ]
        },
        {
            text: "Cardless",
            icon: iconPayer,
            subItems: [
                {
                    url: "/transactions/deposit",
                    text: "Generate Paycode"
                },
                {
                    url: "/transactions/withdraw",
                    text: "History"
                }
            ]
        },
        {
            text: "Loans",
            icon: iconPayer,
            subItems: [
                {
                    url: "/transactions/deposit",
                    text: "Request Loan"
                },
                {
                    url: "/transactions/withdraw",
                    text: "History"
                },
                {
                    url: "/transactions/withdraw",
                    text: "Loan Packages"
                }
            ]
        },
        {
            text: "Payments",
            icon: iconPayer,
            subItems: [
                {
                    url: "/transactions/deposit",
                    text: "Internet Service"
                },
                {
                    url: "/transactions/withdraw",
                    text: "Insurance"
                },
                {
                    url: "/transactions/withdraw",
                    text: "Cable TV"
                },
                {
                    url: "/transactions/withdraw",
                    text: "Taxes & Levies"
                },
                {
                    url: "/transactions/withdraw",
                    text: "Financial Services"
                },
                {
                    url: "/transactions/withdraw",
                    text: "Flight Booking"
                }
            ]
        },
        {
            text: "Info Center",
            icon: iconPayer,
            subItems: [
                {
                    url: "/transactions/deposit",
                    text: "Quick Quide"
                },
                {
                    url: "/transactions/withdraw",
                    text: "FAQ"
                },
                {
                    url: "/transactions/withdraw",
                    text: "Contact Info"
                },
                {
                    url: "/transactions/withdraw",
                    text: "Live Chat"
                }
            ]
        },
        {
            text: "Self Service",
            icon: iconPayer,
            subItems: [
                {
                    url: "/transactions/deposit",
                    text: "Generate Statement"
                },
                {
                    url: "/transactions/withdraw",
                    text: "Account Officer"
                }
            ]
        },
        {
            text: "Settings",
            icon: iconSettings,
            subItems: [
                {
                    url: "/settings/profile",
                    text: "Profile"
                },
                {
                    url: "/settings/change-password",
                    text: "Change Password"
                }
            ]
        }
    ]
}

export default DefaultStore