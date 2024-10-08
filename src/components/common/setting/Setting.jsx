import { Link } from "react-router-dom";

export default function Setting() {
    return (
        <div className="bg-white p-3 rounded-xl">
            <div className="flex flex-col gap-7">
                <section className="profileSettings flex flex-col gap-4">
                    <h2 className="text-xl font-bold">Account Settings</h2>
                    <div className=" flex flex-col gap-3 px-5">
                        <Link className="flex flex-col gap-2">
                            <span className=" font-semibold">
                                Email & Contact Info
                            </span>
                            <p className="text-sm text-neutral-textSecondary px-2">
                                update Your email address, phone number, and other contact details.
                            </p>
                        </Link>
                        <Link >
                            <span className=" font-semibold">
                                Password Management
                            </span>
                            <p className="text-sm text-neutral-textSecondary px-2">
                                Change password.
                            </p>
                        </Link>
                        <Link >
                            <span className=" font-semibold">
                                Two-factor Authentication (2FA)
                            </span>
                            <p className="text-sm text-neutral-textSecondary px-2">
                                Enable or disable two-factor authentication for extra security.
                            </p>
                        </Link>
                        <Link to={"profileSettings"} className="flex flex-col gap-2">
                            <span className=" font-semibold">
                                Profile
                            </span>
                            <p className="text-sm text-neutral-textSecondary px-2">
                                update Your Profile image and cover image
                            </p>
                        </Link>
                    </div>
                </section>
                <section className="subscriptionAndBilling flex flex-col gap-4">
                    <h2 className="text-xl font-bold">Subscription and Billing</h2>
                    <div className=" flex flex-col gap-3 px-5">
                        <Link >
                            <span className=" font-semibold">
                                Subscription Plan
                            </span>
                            <p className="text-sm text-neutral-textSecondary px-2">
                                Show current plan details, with an option to upgrade or downgrade.
                            </p>
                        </Link>
                        <Link>
                            <span className=" font-semibold">
                                Payment Information
                            </span>
                            <p className="text-sm text-neutral-textSecondary px-2">
                                Manage billing information (credit card, PayPal, etc.)
                            </p>
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    )
}
