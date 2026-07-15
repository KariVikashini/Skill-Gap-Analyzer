import "./DashboardCard.css";

function DashboardCard({

    title,

    value,

    icon,

    color

}){

    return(

        <div className="card dashboard-card shadow-sm">

            <div className="card-body">

                <div className="d-flex justify-content-between align-items-center">

                    <div>

                        <h6 className="text-muted">

                            {title}

                        </h6>

                        <h3>

                            {value}

                        </h3>

                    </div>

                    <div
                        className="dashboard-icon"
                        style={{background:color}}
                    >

                        {icon}

                    </div>

                </div>

            </div>

        </div>

    )

}

export default DashboardCard;