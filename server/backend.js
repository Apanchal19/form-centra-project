//Install all the required modules and packages

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
const puppeteer = require("puppeteer");
const nodemailer = require("nodemailer");

// Create an instance of Express
const app = express();

//password : dmpxezvksndsdaqa

// Middleware for parsing JSON data
app.use(bodyParser.json());
app.use(express.json());
app.use(
    cors({
        origin: "http://localhost:3000",
    })
);

// Validation function for checking if a field is empty
const validateRequiredField = (field, fieldName) => {
    if (!field) {
        throw new Error(`The '${fieldName}' field is required.`);
    }
};

// Validation middleware function
const validateData = (req, res, next) => {
    try {
        const {
            WorkNo,
            customerName,
            address,
            phoneNumber,
            lastInstallDate,
            returnReason,
            requiresNewProduct,
            itemDescription,
            photoOfDefects,
            signedOffPaid,
            givenReturnDate,
            returnDate,
            additionalInformation,
            completionNotes,
            productOrderedDate,
            expectedArrivalDate,
            arrangedReturnDate,
            attachRemakeForm,
            confirmedArrivalDate,
            productInStock,
            jobCompletedBy,
            jobCompletedDate,
        } = req.body;

        // Validate required fields
        validateRequiredField(WorkNo, "Work No");
        validateRequiredField(customerName, "Customer Name");
        validateRequiredField(address, "Address");
        validateRequiredField(phoneNumber, "Phone Number");
        validateRequiredField(lastInstallDate, "lastInstallDate");
        validateRequiredField(returnReason, "returnReason");
        validateRequiredField(requiresNewProduct, "requiresNewProduct");
        validateRequiredField(itemDescription, "itemDescription");
        validateRequiredField(photoOfDefects, "photoOfDefects");
        validateRequiredField(signedOffPaid, "signedOffPaid");
        validateRequiredField(givenReturnDate, "givenReturnDate");
        // validateRequiredField(returnDate, "returnDate");
        // validateRequiredField(additionalInformation, "additionalInformation");
        // validateRequiredField(completionNotes, "completionNotes");
        validateRequiredField(productOrderedDate, "productOrderedDate");
        validateRequiredField(expectedArrivalDate, "expectedArrivalDate");
        validateRequiredField(arrangedReturnDate, "arrangedReturnDate");
        validateRequiredField(attachRemakeForm, "attachRemakeForm");
        validateRequiredField(confirmedArrivalDate, "confirmedArrivalDate");
        validateRequiredField(productInStock, "productInStock");
        validateRequiredField(jobCompletedBy, "jobCompletedBy");
        validateRequiredField(jobCompletedDate, "jobCompletedDate");

        // If all validations pass, proceed to the next middleware
        next();
    } catch (error) {
        // Return a response with the validation error message
        res.status(400).json({ error: error.message });
    }
};

// Endpoint to handle the POST request and generate PDF
app.post("/api/data", validateData, async(req, res) => {
    try {
        const {
            WorkNo,
            customerName,
            address,
            phoneNumber,
            lastInstallDate,
            returnReason,
            requiresNewProduct,
            itemDescription,
            photoOfDefects,
            signedOffPaid,
            givenReturnDate,
            returnDate,
            additionalInformation,
            completionNotes,
            productOrderedDate,
            expectedArrivalDate,
            arrangedReturnDate,
            attachRemakeForm,
            confirmedArrivalDate,
            productInStock,
            jobCompletedBy,
            jobCompletedDate,
        } = req.body;

        console.log(WorkNo); // Print WorkNo to the console
        console.log(customerName); // Print customerName to the console
        console.log(address); // Print address to the console
        console.log(phoneNumber);
        console.log(lastInstallDate);
        console.log(returnReason);
        console.log(requiresNewProduct);
        console.log(itemDescription);
        console.log(photoOfDefects);
        console.log(signedOffPaid);
        console.log(givenReturnDate);
        console.log(returnDate);
        console.log(additionalInformation);
        console.log(completionNotes);
        console.log(productOrderedDate);
        console.log(expectedArrivalDate);
        console.log(arrangedReturnDate);
        console.log(attachRemakeForm);
        console.log(confirmedArrivalDate);
        console.log(productInStock);
        console.log(jobCompletedBy);
        console.log(jobCompletedDate);

        res.json({ message: "Data received successfully" });

        // Load the HTML template file
        const htmlTemplate = fs.readFileSync("../server/index.html", "utf-8");

        // Replace dynamic values in the HTML template
        const replacedHtml = htmlTemplate
            .replace("{WorkNo}", WorkNo)
            .replace("{customerName}", customerName)
            .replace("{address}", address)
            .replace("{phoneNumber}", phoneNumber)
            .replace("{lastInstallDate}", lastInstallDate)
            .replace("{returnReason}", returnReason)
            .replace("{requiresNewProduct}", requiresNewProduct)
            .replace("{itemDescription}", itemDescription)
            .replace("{photoOfDefects}", photoOfDefects)
            .replace("{signedOffPaid}", signedOffPaid)
            .replace("{givenReturnDate}", givenReturnDate)
            .replace("{returnDate}", returnDate ? returnDate : "NA")
            .replace("{additionalInformation}", additionalInformation ? additionalInformation : "NA")
            .replace("{completionNotes}", completionNotes ? completionNotes : "NA")
            .replace("{productOrderedDate}", productOrderedDate)
            .replace("{expectedArrivalDate}", expectedArrivalDate)
            .replace("{arrangedReturnDate}", arrangedReturnDate)
            .replace("{attachRemakeForm}", attachRemakeForm)
            .replace("{confirmedArrivalDate}", confirmedArrivalDate)
            .replace("{productInStock}", productInStock)
            .replace("{jobCompletedBy}", jobCompletedBy)
            .replace("{jobCompletedDate}", jobCompletedDate);
        // Launch a headless browser instance with Puppeteer
        // console.log(replacedHtml);

        const browser = await puppeteer.launch({
            headless: true, // Set headless to true for production use
        });

        const page = await browser.newPage();

        // Set the viewport size
        await page.setViewport({ width: 2500, height: 500 });

        // Set the HTML content of the page
        await page.setContent(replacedHtml, { waitUntil: "networkidle0" });

        async function delay(ms) {
            return new Promise((resolve) => setTimeout(resolve, ms));
        }

        // Wait for an additional delay to ensure the page is fully rendered
        await delay(2000);

        // Generate the PDF with the styles
        const pdfBuffer = await page.pdf({ format: "A4", printBackground: true });

        // Define the file path to save the PDF
        const filePath = "./return_trip_checklist.pdf";

        // Save the PDF to a file
        fs.writeFileSync(filePath, pdfBuffer);

        console.log("PDF saved successfully:", filePath);

        await delay(2000);

        // Close the browser instance
        await browser.close();

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "akshaypanchal2023@gmail.com",
                pass: "ednfniwetcfothfi", //new passkey generated please use this : ednfniwetcfothfi
            },
        });

        const mailOptions = {
            from: "akshaypanchal2023@gmail.com",
            to: "VKhatri@centra.ca, mxu@centra.ca", // Uncomment to send to the following mail
            // to: "akshay.panchalhp@gmail.com", //Testing purpose
            subject: `W/O# ${WorkNo} - Return Trip Checklist`,
            text: "All fields from the form",
            attachments: [{
                filename: "return_trip_checklist.pdf",
                path: filePath,
            }, ],
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error("Error sending email:", error);
                res.status(500).json({ error: "Error sending email" });
            } else {
                console.log("Email sent successfully");
                // res.json({ message: 'Email sent successfully' });
            }
        });
    } catch (error) {
        console.error("Error generating PDF:", error);
        res.status(500).json({ error: "Error generating PDF" });
    }
});

// Start the server
const port = 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});