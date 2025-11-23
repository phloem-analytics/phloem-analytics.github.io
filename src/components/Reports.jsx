import { useState } from 'react'
import '../styles/Reports.css'

// Dynamically import all report files at build time
const reportModules = import.meta.glob('../data/reports/*.jsx', { eager: true })

// Process the imported modules to extract report data
const reportsData = Object.values(reportModules)
  .map(module => module.default)
  .sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort by date, newest first

function Reports() {
  const [selectedReport, setSelectedReport] = useState(null)

  const handleDownload = (pdfPath, title) => {
    // In a real implementation, this would trigger an actual download
    console.log(`Downloading: ${pdfPath}`)
    // For now, just show an alert as PDFs are mock
    alert(`Download would start for: "${title}"\nPath: ${pdfPath}`)
  }

  const handleViewReport = (report) => {
    setSelectedReport(report)
  }

  const handleBackToList = () => {
    setSelectedReport(null)
  }

  // Detail view when a report is selected
  if (selectedReport) {
    // Get the content component/function
    const ReportContent = selectedReport.content

    return (
      <div className="content-section">
        <div className="report-detail">
          <div className="report-detail-header">
            <img
              src={selectedReport.image}
              alt={selectedReport.title}
              className="report-detail-image"
              onError={(e) => {
                // Fallback for missing images
                e.target.style.display = 'none'
              }}
            />
            <h2>{selectedReport.title}</h2>
            <div className="report-detail-date">
              Published: {new Date(selectedReport.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
          </div>

          <div className="report-detail-content">
            {typeof ReportContent === 'function' ? <ReportContent /> : ReportContent}
          </div>

          <div className="report-detail-actions">
            <button onClick={handleBackToList}>
              ← Back to Reports
            </button>
            <button onClick={() => handleDownload(selectedReport.pdfPath, selectedReport.title)}>
              Download PDF
            </button>
          </div>
        </div>
      </div>
    )
  }

  // List view - default
  return (
    <div className="content-section">
      <div className="reports-container">
        <h2>Reports</h2>
        <p>A place for white papers and reports.</p>

        <div className="reports-grid">
          {reportsData.map((report) => (
            <div key={report.id} className="report-card">
              <img
                src={report.image}
                alt={report.title}
                className="report-thumbnail"
                onError={(e) => {
                  // Fallback for missing images - show a placeholder style
                  e.target.style.display = 'none'
                }}
              />
              <h3>{report.title}</h3>
              <div className="report-date">
                {new Date(report.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })}
              </div>
              <p className="report-description">{report.shortDescription}</p>
              <div className="report-actions">
                <button onClick={() => handleViewReport(report)}>
                  View Report
                </button>
                <button onClick={() => handleDownload(report.pdfPath, report.title)}>
                  Download PDF
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Reports
