import PreviewDataHeader from "./PreviewDataHeader";
import PreviewDataRow from "./PreviewDataRow";
export default function PreviewData(){
    return(
        <div className="table-container">
            <table className="booking-table">
                <PreviewDataHeader />
                <tbody className="divide-y divide-gray-300/20" id="lws-previewBooked">
                    {/* <!-- Row --> */}                    
                    <PreviewDataRow />
                </tbody>
            </table>
        </div>
    )
}