const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
const puppeteer = require("puppeteer");
const nodemailer = require("nodemailer");
const mailgunTransport = require('nodemailer-mailgun-transport');
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

const transporter = nodemailer.createTransport(
    mailgunTransport({
        auth: {
            api_key: 'fa792297aedfc7990fe5fc0950e58b85-5d9bd83c-7fe09069',
            domain: 'sandbox79ff3d243e9f4729a412194f8f5ba012.mailgun.org',
        },
    })
);


// Endpoint to handle the POST request and generate PDF
app.post("/api/data", async(req, res) => {
    try {
        const {
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
            .replace("{returnDate}", returnDate)
            .replace("{additionalInformation}", additionalInformation)
            .replace("{completionNotes}", completionNotes)
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
        await page.setViewport({ width: 2500, height: 800 });

        // Set the HTML content of the page
        await page.setContent(replacedHtml, { waitUntil: "networkidle0" });

        // Wait for a short delay to allow the page to render properly
        // await page.waitForTimeout(1000);

        // Generate the PDF with the styles
        // const pdfBuffer = await page.pdf({ format: "A4", printBackground: true });

        async function delay(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        // Wait for the page to finish loading and rendering
        // await page.waitForNavigation({ waitUntil: "networkidle0", timeout: 0 });


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
                pass: "dmpxezvksndsdaqa"
            }
        });


        const mailOptions = {
            from: 'akshaypanchal2023@gmail.com',
            to: 'alan19walker1997@gmail.com',
            subject: `W/O# {W/O# value} - Return Trip Checklist`,
            text: 'All fields from the form',
            attachments: [{
                filename: 'return_trip_checklist.pdf',
                path: filePath,
            }, ],
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
                res.status(500).json({ error: 'Error sending email' });
            } else {
                console.log('Email sent successfully');
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