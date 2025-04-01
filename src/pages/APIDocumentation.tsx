
import React, { useState } from 'react';
import { ArrowLeft, Copy, Download, ExternalLink } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import PageHeading from '@/components/ui/PageHeading';
import InfoBox from '@/components/ui/InfoBox';
import SwaggerUI from 'swagger-ui-react';
import { useToast } from '@/hooks/use-toast';
import TableOfContents from '../components/ui/TableOfContents';

// Mock API data - in a real app, this would come from an API or database
const apiData = {
  'analyticshq': {
    name: 'AnalyticsHQ',
    description: 'Comprehensive analytics API for tracking user behavior and engagement.',
    version: 'v2.0',
    baseURL: 'https://api.analyticshq.com/v2',
    authentication: 'API Key (Header: X-API-Key)',
    logo: 'https://via.placeholder.com/80',
    pricing: 'Free tier, then $0.01 per event',
    swaggerUrl: 'https://petstore.swagger.io/v2/swagger.json', // This is just a placeholder
    documentation: {
      overview: `
        The AnalyticsHQ API allows you to track user events, analyze user behavior, and generate insights 
        from your application data. This API provides endpoints for tracking events, creating custom 
        dashboards, and exporting analytics data in various formats.
      `,
      endpoints: [
        {
          name: 'Track Event',
          method: 'POST',
          path: '/events',
          description: 'Record a user event in your application',
          parameters: [
            { name: 'event_name', type: 'string', required: true, description: 'Name of the event' },
            { name: 'properties', type: 'object', required: false, description: 'Additional event properties' },
            { name: 'user_id', type: 'string', required: true, description: 'Unique identifier for the user' },
            { name: 'timestamp', type: 'string', required: false, description: 'ISO 8601 timestamp' },
          ],
          response: '{ "success": true, "event_id": "evt_123456789" }',
        },
        {
          name: 'Get User Profile',
          method: 'GET',
          path: '/users/{user_id}',
          description: 'Retrieve a user profile with associated events and properties',
          parameters: [
            { name: 'user_id', type: 'string', required: true, description: 'Unique identifier for the user' },
            { name: 'include_events', type: 'boolean', required: false, description: 'Include user events in response' },
          ],
          response: '{ "user_id": "usr_123456", "first_seen": "2023-01-15T00:00:00Z", "properties": {}, "events": [...] }',
        },
        {
          name: 'Create Custom Report',
          method: 'POST',
          path: '/reports',
          description: 'Generate a custom analytics report',
          parameters: [
            { name: 'name', type: 'string', required: true, description: 'Report name' },
            { name: 'metrics', type: 'array', required: true, description: 'Metrics to include in the report' },
            { name: 'dimensions', type: 'array', required: false, description: 'Dimensions to segment the data' },
            { name: 'date_range', type: 'object', required: true, description: 'Start and end dates for the report' },
          ],
          response: '{ "report_id": "rpt_789012", "status": "processing", "download_url": null }',
        },
      ],
      codeExamples: {
        javascript: `
const trackEvent = async () => {
  const response = await fetch('https://api.analyticshq.com/v2/events', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key': 'YOUR_API_KEY'
    },
    body: JSON.stringify({
      event_name: 'button_click',
      user_id: 'usr_123456',
      properties: {
        button_id: 'signup_button',
        page: '/landing'
      }
    })
  });
  
  const data = await response.json();
  console.log('Event tracked:', data.event_id);
};

trackEvent();
        `,
        python: `
import requests

def track_event():
    response = requests.post(
        'https://api.analyticshq.com/v2/events',
        headers={
            'Content-Type': 'application/json',
            'X-API-Key': 'YOUR_API_KEY'
        },
        json={
            'event_name': 'button_click',
            'user_id': 'usr_123456',
            'properties': {
                'button_id': 'signup_button',
                'page': '/landing'
            }
        }
    )
    
    data = response.json()
    print(f'Event tracked: {data["event_id"]}')

track_event()
        `,
        curl: `
curl -X POST https://api.analyticshq.com/v2/events \\
  -H "Content-Type: application/json" \\
  -H "X-API-Key: YOUR_API_KEY" \\
  -d '{
    "event_name": "button_click",
    "user_id": "usr_123456",
    "properties": {
      "button_id": "signup_button",
      "page": "/landing"
    }
  }'
        `
      }
    }
  },
  'paystream': {
    name: 'PayStream',
    description: 'Secure payment processing API with support for multiple currencies.',
    version: 'v3.2',
    baseURL: 'https://api.paystream.com/v3',
    authentication: 'Bearer Token (Authorization header)',
    logo: 'https://via.placeholder.com/80',
    pricing: 'Pay as you go: 2.5% + $0.30 per transaction',
    swaggerUrl: 'https://petstore.swagger.io/v2/swagger.json', // Placeholder
    documentation: {
      overview: `
        PayStream API offers a complete set of payment processing capabilities for businesses of all sizes. 
        With support for 135+ currencies and robust fraud detection, you can securely process payments globally.
        Our API follows RESTful principles and returns responses in JSON format.
      `,
      endpoints: [
        {
          name: 'Create Payment',
          method: 'POST',
          path: '/payments',
          description: 'Create a new payment charge',
          parameters: [
            { name: 'amount', type: 'number', required: true, description: 'Payment amount in cents' },
            { name: 'currency', type: 'string', required: true, description: 'Three-letter currency code (e.g., USD)' },
            { name: 'payment_method_id', type: 'string', required: true, description: 'ID of saved payment method or token' },
            { name: 'description', type: 'string', required: false, description: 'Description of the payment' },
          ],
          response: '{ "id": "pay_123456789", "status": "succeeded", "amount": 2000, "currency": "USD" }',
        },
        {
          name: 'Get Payment',
          method: 'GET',
          path: '/payments/{payment_id}',
          description: 'Retrieve details about a specific payment',
          parameters: [
            { name: 'payment_id', type: 'string', required: true, description: 'Unique identifier for the payment' },
          ],
          response: '{ "id": "pay_123456789", "status": "succeeded", "amount": 2000, "currency": "USD", "created": "2023-05-15T12:30:00Z" }',
        },
        {
          name: 'Create Refund',
          method: 'POST',
          path: '/payments/{payment_id}/refunds',
          description: 'Refund a previously processed payment',
          parameters: [
            { name: 'payment_id', type: 'string', required: true, description: 'ID of the payment to refund' },
            { name: 'amount', type: 'number', required: false, description: 'Amount to refund (defaults to full amount)' },
            { name: 'reason', type: 'string', required: false, description: 'Reason for the refund' },
          ],
          response: '{ "id": "ref_987654321", "status": "succeeded", "amount": 2000, "payment_id": "pay_123456789" }',
        },
      ],
      codeExamples: {
        javascript: `
const createPayment = async () => {
  const response = await fetch('https://api.paystream.com/v3/payments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer YOUR_API_KEY'
    },
    body: JSON.stringify({
      amount: 2000, // $20.00
      currency: 'USD',
      payment_method_id: 'pm_card_visa',
      description: 'Order #12345'
    })
  });
  
  const data = await response.json();
  console.log('Payment created:', data.id);
};

createPayment();
        `,
        python: `
import requests

def create_payment():
    response = requests.post(
        'https://api.paystream.com/v3/payments',
        headers={
            'Content-Type': 'application/json',
            'Authorization': 'Bearer YOUR_API_KEY'
        },
        json={
            'amount': 2000,  # $20.00
            'currency': 'USD',
            'payment_method_id': 'pm_card_visa',
            'description': 'Order #12345'
        }
    )
    
    data = response.json()
    print(f'Payment created: {data["id"]}')

create_payment()
        `,
        curl: `
curl -X POST https://api.paystream.com/v3/payments \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{
    "amount": 2000,
    "currency": "USD",
    "payment_method_id": "pm_card_visa", 
    "description": "Order #12345"
  }'
        `
      }
    }
  },
  'messagenet': {
    name: 'MessageNet',
    description: 'Send SMS, email, and push notifications through a single API.',
    version: 'v1.5',
    baseURL: 'https://api.messagenet.io/v1',
    authentication: 'API Key (Query param: api_key)',
    logo: 'https://via.placeholder.com/80',
    pricing: 'Starting at $0.005 per SMS, $0.0001 per email',
    swaggerUrl: 'https://petstore.swagger.io/v2/swagger.json', // Placeholder
    documentation: {
      overview: `
        MessageNet provides a unified API for all your communication needs. Send SMS, emails, and push notifications
        through a single integration. Our API abstracts away the complexity of managing multiple communication channels
        and providers, letting you focus on your core business.
      `,
      endpoints: [
        {
          name: 'Send SMS',
          method: 'POST',
          path: '/sms',
          description: 'Send an SMS message to a recipient',
          parameters: [
            { name: 'to', type: 'string', required: true, description: 'Recipient phone number in E.164 format' },
            { name: 'from', type: 'string', required: true, description: 'Sender phone number or name' },
            { name: 'message', type: 'string', required: true, description: 'SMS message content' },
          ],
          response: '{ "id": "sms_123456", "status": "sent", "to": "+15551234567" }',
        },
        {
          name: 'Send Email',
          method: 'POST',
          path: '/email',
          description: 'Send an email to a recipient',
          parameters: [
            { name: 'to', type: 'string', required: true, description: 'Recipient email address' },
            { name: 'from', type: 'string', required: true, description: 'Sender email address' },
            { name: 'subject', type: 'string', required: true, description: 'Email subject line' },
            { name: 'html', type: 'string', required: false, description: 'HTML content of the email' },
            { name: 'text', type: 'string', required: false, description: 'Plain text content of the email' },
          ],
          response: '{ "id": "email_789012", "status": "queued", "to": "recipient@example.com" }',
        },
      ],
      codeExamples: {
        javascript: `
const sendSMS = async () => {
  const response = await fetch('https://api.messagenet.io/v1/sms?api_key=YOUR_API_KEY', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      to: '+15551234567',
      from: 'YourCompany',
      message: 'Your verification code is 123456'
    })
  });
  
  const data = await response.json();
  console.log('SMS sent:', data.id);
};

sendSMS();
        `,
        python: `
import requests

def send_sms():
    response = requests.post(
        'https://api.messagenet.io/v1/sms',
        params={'api_key': 'YOUR_API_KEY'},
        json={
            'to': '+15551234567',
            'from': 'YourCompany',
            'message': 'Your verification code is 123456'
        }
    )
    
    data = response.json()
    print(f'SMS sent: {data["id"]}')

send_sms()
        `,
        curl: `
curl -X POST 'https://api.messagenet.io/v1/sms?api_key=YOUR_API_KEY' \\
  -H "Content-Type: application/json" \\
  -d '{
    "to": "+15551234567",
    "from": "YourCompany",
    "message": "Your verification code is 123456"
  }'
        `
      }
    }
  },
  'metricflow': {
    name: 'MetricFlow',
    description: 'Advanced data analytics and metric calculation platform for businesses.',
    version: 'v1.2',
    baseURL: 'https://api.metricflow.com/v1',
    authentication: 'Bearer Token (Authorization header)',
    logo: 'https://via.placeholder.com/80',
    pricing: 'Tiered pricing starting at $99/month',
    swaggerUrl: 'https://petstore.swagger.io/v2/swagger.json',
    documentation: {
      overview: `
        MetricFlow provides a powerful API for calculating and tracking complex business metrics. 
        Easily aggregate, transform, and analyze your data with our flexible metric calculation engine.
      `,
      endpoints: [
        {
          name: 'Create Metric',
          method: 'POST',
          path: '/metrics',
          description: 'Define a new custom metric for tracking',
          parameters: [
            { name: 'name', type: 'string', required: true, description: 'Name of the metric' },
            { name: 'calculation', type: 'string', required: true, description: 'Calculation formula for the metric' },
            { name: 'data_sources', type: 'array', required: true, description: 'Data sources to use for calculation' },
          ],
          response: '{ "metric_id": "mtc_123456", "status": "created" }',
        },
        {
          name: 'Get Metric Data',
          method: 'GET',
          path: '/metrics/{metric_id}',
          description: 'Retrieve calculated metric data',
          parameters: [
            { name: 'metric_id', type: 'string', required: true, description: 'Unique identifier for the metric' },
            { name: 'start_date', type: 'string', required: false, description: 'Start date for data retrieval' },
            { name: 'end_date', type: 'string', required: false, description: 'End date for data retrieval' },
          ],
          response: '{ "metric_id": "mtc_123456", "value": 1234.56, "trend": "increasing" }',
        },
      ],
      codeExamples: {
        javascript: `
const createMetric = async () => {
  const response = await fetch('https://api.metricflow.com/v1/metrics', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer YOUR_API_KEY'
    },
    body: JSON.stringify({
      name: 'Customer Acquisition Cost',
      calculation: 'total_marketing_spend / new_customers',
      data_sources: ['marketing_expenses', 'customer_registrations']
    })
  });
  
  const data = await response.json();
  console.log('Metric created:', data.metric_id);
};

createMetric();
        `,
        python: `
import requests

def create_metric():
    response = requests.post(
        'https://api.metricflow.com/v1/metrics',
        headers={
            'Content-Type': 'application/json',
            'Authorization': 'Bearer YOUR_API_KEY'
        },
        json={
            'name': 'Customer Acquisition Cost',
            'calculation': 'total_marketing_spend / new_customers',
            'data_sources': ['marketing_expenses', 'customer_registrations']
        }
    )
    
    data = response.json()
    print(f'Metric created: {data["metric_id"]}')

create_metric()
        `,
        curl: `
curl -X POST https://api.metricflow.com/v1/metrics \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{
    "name": "Customer Acquisition Cost",
    "calculation": "total_marketing_spend / new_customers",
    "data_sources": ["marketing_expenses", "customer_registrations"]
  }'
        `
      }
    }
  },
  'insightiq': {
    name: 'InsightIQ',
    description: 'Business intelligence and data visualization platform.',
    version: 'v2.0',
    baseURL: 'https://api.insightiq.com/v2',
    authentication: 'API Key (Header: X-API-Key)',
    logo: 'https://via.placeholder.com/80',
    pricing: 'Starting at $249/month',
    swaggerUrl: 'https://petstore.swagger.io/v2/swagger.json',
    documentation: {
      overview: `
        InsightIQ transforms raw data into actionable insights with powerful 
        visualization and reporting tools. Create dynamic dashboards, 
        generate intelligent reports, and uncover hidden patterns in your data.
      `,
      endpoints: [
        {
          name: 'Create Dashboard',
          method: 'POST',
          path: '/dashboards',
          description: 'Create a new interactive dashboard',
          parameters: [
            { name: 'name', type: 'string', required: true, description: 'Name of the dashboard' },
            { name: 'widgets', type: 'array', required: true, description: 'List of widgets to include' },
            { name: 'data_sources', type: 'array', required: true, description: 'Data sources for the dashboard' },
          ],
          response: '{ "dashboard_id": "dsh_123456", "status": "created" }',
        },
        {
          name: 'Generate Report',
          method: 'POST',
          path: '/reports',
          description: 'Generate a comprehensive business report',
          parameters: [
            { name: 'type', type: 'string', required: true, description: 'Type of report (quarterly, annual, custom)' },
            { name: 'metrics', type: 'array', required: true, description: 'Metrics to include in the report' },
            { name: 'format', type: 'string', required: false, description: 'Output format (PDF, CSV, interactive)' },
          ],
          response: '{ "report_id": "rpt_789012", "download_url": "https://cdn.insightiq.com/reports/rpt_789012.pdf" }',
        },
      ],
      codeExamples: {
        javascript: `
const createDashboard = async () => {
  const response = await fetch('https://api.insightiq.com/v2/dashboards', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key': 'YOUR_API_KEY'
    },
    body: JSON.stringify({
      name: 'Sales Performance Dashboard',
      widgets: ['revenue_chart', 'conversion_rate', 'top_products'],
      data_sources: ['sales_database', 'crm_system']
    })
  });
  
  const data = await response.json();
  console.log('Dashboard created:', data.dashboard_id);
};

createDashboard();
        `,
        python: `
import requests

def create_dashboard():
    response = requests.post(
        'https://api.insightiq.com/v2/dashboards',
        headers={
            'Content-Type': 'application/json',
            'X-API-Key': 'YOUR_API_KEY'
        },
        json={
            'name': 'Sales Performance Dashboard',
            'widgets': ['revenue_chart', 'conversion_rate', 'top_products'],
            'data_sources': ['sales_database', 'crm_system']
        }
    )
    
    data = response.json()
    print(f'Dashboard created: {data["dashboard_id"]}')

create_dashboard()
        `,
        curl: `
curl -X POST https://api.insightiq.com/v2/dashboards \\
  -H "Content-Type: application/json" \\
  -H "X-API-Key: YOUR_API_KEY" \\
  -d '{
    "name": "Sales Performance Dashboard",
    "widgets": ["revenue_chart", "conversion_rate", "top_products"],
    "data_sources": ["sales_database", "crm_system"]
  }'
        `
      }
    }
  },
  'invoicepal': {
    name: 'InvoicePal',
    description: 'Automated invoicing and billing management solution.',
    version: 'v1.1',
    baseURL: 'https://api.invoicepal.com/v1',
    authentication: 'Bearer Token (Authorization header)',
    logo: 'https://via.placeholder.com/80',
    pricing: 'Starting at $49/month',
    swaggerUrl: 'https://petstore.swagger.io/v2/swagger.json',
    documentation: {
      overview: `
        InvoicePal simplifies billing and invoicing for businesses of all sizes. 
        Automate invoice generation, track payments, and manage financial workflows 
        with our comprehensive API.
      `,
      endpoints: [
        {
          name: 'Create Invoice',
          method: 'POST',
          path: '/invoices',
          description: 'Generate a new invoice for a client',
          parameters: [
            { name: 'client_id', type: 'string', required: true, description: 'Unique identifier for the client' },
            { name: 'items', type: 'array', required: true, description: 'List of billable items' },
            { name: 'due_date', type: 'string', required: false, description: 'Invoice due date' },
          ],
          response: '{ "invoice_id": "inv_123456", "status": "draft", "total": 1500.00 }',
        },
        {
          name: 'Send Invoice',
          method: 'POST',
          path: '/invoices/{invoice_id}/send',
          description: 'Send an invoice to the client',
          parameters: [
            { name: 'invoice_id', type: 'string', required: true, description: 'Unique identifier for the invoice' },
            { name: 'email', type: 'string', required: false, description: 'Client email address' },
          ],
          response: '{ "status": "sent", "delivery_method": "email" }',
        },
      ],
      codeExamples: {
        javascript: `
const createInvoice = async () => {
  const response = await fetch('https://api.invoicepal.com/v1/invoices', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer YOUR_API_KEY'
    },
    body: JSON.stringify({
      client_id: 'client_789',
      items: [
        { description: 'Web Design Services', quantity: 1, unit_price: 1500 }
      ],
      due_date: '2023-06-30'
    })
  });
  
  const data = await response.json();
  console.log('Invoice created:', data.invoice_id);
};

createInvoice();
        `,
        python: `
import requests

def create_invoice():
    response = requests.post(
        'https://api.invoicepal.com/v1/invoices',
        headers={
            'Content-Type': 'application/json',
            'Authorization': 'Bearer YOUR_API_KEY'
        },
        json={
            'client_id': 'client_789',
            'items': [
                {'description': 'Web Design Services', 'quantity': 1, 'unit_price': 1500}
            ],
            'due_date': '2023-06-30'
        }
    )
    
    data = response.json()
    print(f'Invoice created: {data["invoice_id"]}')

create_invoice()
        `,
        curl: `
curl -X POST https://api.invoicepal.com/v1/invoices \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{
    "client_id": "client_789",
    "items": [
      {
        "description": "Web Design Services",
        "quantity": 1,
        "unit_price": 1500
      }
    ],
    "due_date": "2023-06-30"
  }'
        `
      }
    }
  },
  'transacto': {
    name: 'Transacto',
    description: 'Financial transaction monitoring and fraud detection API.',
    version: 'v2.0',
    baseURL: 'https://api.transacto.com/v2',
    authentication: 'API Key (Header: X-API-Key)',
    logo: 'https://via.placeholder.com/80',
    pricing: 'Pay per transaction, starting at $0.01',
    swaggerUrl: 'https://petstore.swagger.io/v2/swagger.json',
    documentation: {
      overview: `
        Transacto provides real-time transaction monitoring and advanced fraud 
        detection capabilities. Protect your business with machine learning-powered 
        risk assessment and comprehensive transaction analysis.
      `,
      endpoints: [
        {
          name: 'Analyze Transaction',
          method: 'POST',
          path: '/transactions/analyze',
          description: 'Perform risk analysis on a financial transaction',
          parameters: [
            { name: 'amount', type: 'number', required: true, description: 'Transaction amount' },
            { name: 'currency', type: 'string', required: true, description: 'Transaction currency' },
            { name: 'merchant', type: 'string', required: true, description: 'Merchant identifier' },
            { name: 'customer_id', type: 'string', required: true, description: 'Customer unique identifier' },
          ],
          response: '{ "transaction_id": "txn_123456", "risk_score": 25, "status": "approved" }',
        },
        {
          name: 'Get Transaction History',
          method: 'GET',
          path: '/transactions',
          description: 'Retrieve transaction history for a customer',
          parameters: [
            { name: 'customer_id', type: 'string', required: true, description: 'Customer unique identifier' },
            { name: 'start_date', type: 'string', required: false, description: 'Start date for transaction history' },
            { name: 'end_date', type: 'string', required: false, description: 'End date for transaction history' },
          ],
          response: '{ "transactions": [ { "id": "txn_789012", "amount": 100.00, "date": "2023-05-15T12:30:00Z" } ] }',
        },
      ],
      codeExamples: {
        javascript: `
const analyzeTransaction = async () => {
  const response = await fetch('https://api.transacto.com/v2/transactions/analyze', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key': 'YOUR_API_KEY'
    },
    body: JSON.stringify({
      amount: 250.00,
      currency: 'USD',
      merchant: 'online_retailer',
      customer_id: 'cust_123456'
    })
  });
  
  const data = await response.json();
  console.log('Transaction risk score:', data.risk_score);
};

analyzeTransaction();
        `,
        python: `
import requests

def analyze_transaction():
    response = requests.post(
        'https://api.transacto.com/v2/transactions/analyze',
        headers={
            'Content-Type': 'application/json',
            'X-API-Key': 'YOUR_API_KEY'
        },
        json={
            'amount': 250.00,
            'currency': 'USD',
            'merchant': 'online_retailer',
            'customer_id': 'cust_123456'
        }
    )
    
    data = response.json()
    print(f'Transaction risk score: {data["risk_score"]}')

analyze_transaction()
        `,
        curl: `
curl -X POST https://api.transacto.com/v2/transactions/analyze \\
  -H "Content-Type: application/json" \\
  -H "X-API-Key: YOUR_API_KEY" \\
  -d '{
    "amount": 250.00,
    "currency": "USD",
    "merchant": "online_retailer",
    "customer_id": "cust_123456"
  }'
        `
      }
    }
  },
  'chatbridge': {
    name: 'ChatBridge',
    description: 'Unified communication and chat integration API.',
    version: 'v1.5',
    baseURL: 'https://api.chatbridge.com/v1',
    authentication: 'Bearer Token (Authorization header)',
    logo: 'https://via.placeholder.com/80',
    pricing: 'Starting at $99/month',
    swaggerUrl: 'https://petstore.swagger.io/v2/swagger.json',
    documentation: {
      overview: `
        ChatBridge provides a seamless communication API that integrates 
        multiple chat platforms and messaging services. Connect with your 
        users across various channels with a single, unified API.
      `,
      endpoints: [
        {
          name: 'Send Message',
          method: 'POST',
          path: '/messages',
          description: 'Send a message across multiple communication channels',
          parameters: [
            { name: 'channels', type: 'array', required: true, description: 'List of communication channels' },
            { name: 'message', type: 'object', required: true, description: 'Message content and metadata' },
            { name: 'recipients', type: 'array', required: true, description: 'List of recipient identifiers' },
          ],
          response: '{ "message_id": "msg_123456", "status": "sent", "channels": ["sms", "email"] }',
        },
        {
          name: 'Get Conversation',
          method: 'GET',
          path: '/conversations/{conversation_id}',
          description: 'Retrieve conversation history',
          parameters: [
            { name: 'conversation_id', type: 'string', required: true, description: 'Unique identifier for the conversation' },
            { name: 'limit', type: 'number', required: false, description: 'Maximum number of messages to retrieve' },
          ],
          response: '{ "messages": [ { "id": "msg_789012", "content": "Hello!", "timestamp": "2023-05-15T12:30:00Z" } ] }',
        },
      ],
      codeExamples: {
        javascript: `
const sendMultiChannelMessage = async () => {
  const response = await fetch('https://api.chatbridge.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer YOUR_API_KEY'
    },
    body: JSON.stringify({
      channels: ['sms', 'email'],
      message: {
        subject: 'Important Update',
        body: 'Your account has been activated.'
      },
      recipients: ['user_123456', 'user_789012']
    })
  });
  
  const data = await response.json();
  console.log('Message sent:', data.message_id);
};

sendMultiChannelMessage();
        `,
        python: `
import requests

def send_multi_channel_message():
    response = requests.post(
        'https://api.chatbridge.com/v1/messages',
        headers={
            'Content-Type': 'application/json',
            'Authorization': 'Bearer YOUR_API_KEY'
        },
        json={
            'channels': ['sms', 'email'],
            'message': {
                'subject': 'Important Update',
                'body': 'Your account has been activated.'
            },
            'recipients': ['user_123456', 'user_789012']
        }
    )
    
    data = response.json()
    print(f'Message sent: {data["message_id"]}')

send_multi_channel_message()
        `,
        curl: `
curl -X POST https://api.chatbridge.com/v1/messages \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{
    "channels": ["sms", "email"],
    "message": {
      "subject": "Important Update",
      "body": "Your account has been activated."
    },
    "recipients": ["user_123456", "user_789012"]
  }'
        `
      }
    }
  },
  'notifyplus': {
    name: 'NotifyPlus',
    description: 'Advanced notification and alert management system.',
    version: 'v2.0',
    baseURL: 'https://api.notifyplus.com/v2',
    authentication: 'API Key (Header: X-API-Key)',
    logo: 'https://via.placeholder.com/80',
    pricing: 'Free tier, then $0.01 per notification',
    swaggerUrl: 'https://petstore.swagger.io/v2/swagger.json',
    documentation: {
      overview: `
        NotifyPlus offers a comprehensive notification management API 
        that supports multiple channels and advanced delivery rules. 
        Create, schedule, and track notifications with ease.
      `,
      endpoints: [
        {
          name: 'Create Notification Template',
          method: 'POST',
          path: '/templates',
          description: 'Create a reusable notification template',
          parameters: [
            { name: 'name', type: 'string', required: true, description: 'Template name' },
            { name: 'channels', type: 'array', required: true, description: 'Notification channels' },
            { name: 'content', type: 'object', required: true, description: 'Notification content template' },
          ],
          response: '{ "template_id": "tpl_123456", "status": "created" }',
        },
        {
          name: 'Send Notification',
          method: 'POST',
          path: '/notifications',
          description: 'Send a notification using a template or custom content',
          parameters: [
            { name: 'template_id', type: 'string', required: false, description: 'Template to use' },
            { name: 'recipients', type: 'array', required: true, description: 'List of recipient identifiers' },
            { name: 'custom_content', type: 'object', required: false, description: 'Override template content' },
          ],
          response: '{ "notification_id": "ntf_789012", "status": "sent", "recipients": 5 }',
        },
      ],
      codeExamples: {
        javascript: `
const sendNotification = async () => {
  const response = await fetch('https://api.notifyplus.com/v2/notifications', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key': 'YOUR_API_KEY'
    },
    body: JSON.stringify({
      template_id: 'tpl_welcome',
      recipients: ['user_123', 'user_456', 'user_789'],
      custom_content: {
        name: 'John Doe',
        product: 'Premium Plan'
      }
    })
  });
  
  const data = await response.json();
  console.log('Notification sent:', data.notification_id);
};

sendNotification();
        `,
        python: `
import requests

def send_notification():
    response = requests.post(
        'https://api.notifyplus.com/v2/notifications',
        headers={
            'Content-Type': 'application/json',
            'X-API-Key': 'YOUR_API_KEY'
        },
        json={
            'template_id': 'tpl_welcome',
            'recipients': ['user_123', 'user_456', 'user_789'],
            'custom_content': {
                'name': 'John Doe',
                'product': 'Premium Plan'
            }
        }
    )
    
    data = response.json()
    print(f'Notification sent: {data["notification_id"]}')

send_notification()
        `,
        curl: `
curl -X POST https://api.notifyplus.com/v2/notifications \\
  -H "Content-Type: application/json" \\
  -H "X-API-Key: YOUR_API_KEY" \\
  -d '{
    "template_id": "tpl_welcome",
    "recipients": ["user_123", "user_456", "user_789"],
    "custom_content": {
      "name": "John Doe",
      "product": "Premium Plan"
    }
  }'
        `
      }
    }
  },
  'visionai': {
    name: 'Vision AI',
    description: 'Advanced computer vision and image recognition API.',
    version: 'v1.3',
    baseURL: 'https://api.visionai.com/v1',
    authentication: 'Bearer Token (Authorization header)',
    logo: 'https://via.placeholder.com/80',
    pricing: 'Pay per API call, starting at $0.10 per 1000 requests',
    swaggerUrl: 'https://petstore.swagger.io/v2/swagger.json',
    documentation: {
      overview: `
        Vision AI provides cutting-edge computer vision capabilities, 
        enabling developers to build intelligent image and video analysis 
        features into their applications with ease.
      `,
      endpoints: [
        {
          name: 'Analyze Image',
          method: 'POST',
          path: '/images/analyze',
          description: 'Perform comprehensive image analysis',
          parameters: [
            { name: 'image_url', type: 'string', required: true, description: 'URL of the image to analyze' },
            { name: 'features', type: 'array', required: false, description: 'Specific analysis features to extract' },
          ],
          response: '{ "objects": [ { "name": "car", "confidence": 0.95 } ], "labels": [ "transportation" ] }',
        },
        {
          name: 'Face Detection',
          method: 'POST',
          path: '/images/faces',
          description: 'Detect and analyze faces in an image',
          parameters: [
            { name: 'image_url', type: 'string', required: true, description: 'URL of the image to analyze' },
            { name: 'attributes', type: 'array', required: false, description: 'Face attributes to detect' },
          ],
          response: '{ "faces": [ { "age": 35, "gender": "male", "emotions": ["neutral"] } ] }',
        },
      ],
      codeExamples: {
        javascript: `
const analyzeImage = async () => {
  const response = await fetch('https://api.visionai.com/v1/images/analyze', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer YOUR_API_KEY'
    },
    body: JSON.stringify({
      image_url: 'https://example.com/sample-image.jpg',
      features: ['objects', 'labels', 'colors']
    })
  });
  
  const data = await response.json();
  console.log('Image analysis:', data);
};

analyzeImage();
        `,
        python: `
import requests

def analyze_image():
    response = requests.post(
        'https://api.visionai.com/v1/images/analyze',
        headers={
            'Content-Type': 'application/json',
            'Authorization': 'Bearer YOUR_API_KEY'
        },
        json={
            'image_url': 'https://example.com/sample-image.jpg',
            'features': ['objects', 'labels', 'colors']
        }
    )
    
    data = response.json()
    print('Image analysis:', data)

analyze_image()
        `,
        curl: `
curl -X POST https://api.visionai.com/v1/images/analyze \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{
    "image_url": "https://example.com/sample-image.jpg",
    "features": ["objects", "labels", "colors"]
  }'
        `
      }
    }
  },
  'predictionml': {
    name: 'PredictionML',
    description: 'Machine learning model deployment and prediction API.',
    version: 'v2.1',
    baseURL: 'https://api.predictionml.com/v2',
    authentication: 'API Key (Header: X-API-Key)',
    logo: 'https://via.placeholder.com/80',
    pricing: 'Starting at $199/month',
    swaggerUrl: 'https://petstore.swagger.io/v2/swagger.json',
    documentation: {
      overview: `
        PredictionML allows developers to deploy, manage, and 
        execute machine learning models through a simple, 
        scalable API. Train, deploy, and make predictions 
        across various domains.
      `,
      endpoints: [
        {
          name: 'Deploy Model',
          method: 'POST',
          path: '/models',
          description: 'Deploy a new machine learning model',
          parameters: [
            { name: 'model_type', type: 'string', required: true, description: 'Type of machine learning model' },
            { name: 'training_data', type: 'object', required: true, description: 'Training dataset for the model' },
            { name: 'hyperparameters', type: 'object', required: false, description: 'Model configuration parameters' },
          ],
          response: '{ "model_id": "mdl_123456", "status": "training", "estimated_completion": "2023-05-20T14:30:00Z" }',
        },
        {
          name: 'Make Prediction',
          method: 'POST',
          path: '/predictions/{model_id}',
          description: 'Generate a prediction using a deployed model',
          parameters: [
            { name: 'model_id', type: 'string', required: true, description: 'Unique identifier for the model' },
            { name: 'input_data', type: 'object', required: true, description: 'Input features for prediction' },
          ],
          response: '{ "prediction": 0.85, "confidence": 0.92, "explanation": "High likelihood of positive outcome" }',
        },
      ],
      codeExamples: {
        javascript: `
const makePrediction = async () => {
  const response = await fetch('https://api.predictionml.com/v2/predictions/mdl_123456', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key': 'YOUR_API_KEY'
    },
    body: JSON.stringify({
      input_data: {
        age: 35,
        income: 75000,
        credit_score: 720
      }
    })
  });
  
  const data = await response.json();
  console.log('Prediction:', data.prediction);
};

makePrediction();
        `,
        python: `
import requests

def make_prediction():
    response = requests.post(
        'https://api.predictionml.com/v2/predictions/mdl_123456',
        headers={
            'Content-Type': 'application/json',
            'X-API-Key': 'YOUR_API_KEY'
        },
        json={
            'input_data': {
                'age': 35,
                'income': 75000,
                'credit_score': 720
            }
        }
    )
    
    data = response.json()
    print(f'Prediction: {data["prediction"]}')

make_prediction()
        `,
        curl: `
curl -X POST https://api.predictionml.com/v2/predictions/mdl_123456 \\
  -H "Content-Type: application/json" \\
  -H "X-API-Key: YOUR_API_KEY" \\
  -d '{
    "input_data": {
      "age": 35,
      "income": 75000,
      "credit_score": 720
    }
  }'
        `
      }
    }
  },
  'bobvault': {
    name: 'BobVault',
    description: 'Secure document storage and management API.',
    version: 'v1.2',
    baseURL: 'https://api.bobvault.com/v1',
    authentication: 'Bearer Token (Authorization header)',
    logo: 'https://via.placeholder.com/80',
    pricing: 'Starting at $29/month',
    swaggerUrl: 'https://petstore.swagger.io/v2/swagger.json',
    documentation: {
      overview: `
        BobVault provides a secure, scalable document storage and 
        management solution. Easily store, retrieve, and manage 
        sensitive documents with advanced encryption and access controls.
      `,
      endpoints: [
        {
          name: 'Upload Document',
          method: 'POST',
          path: '/documents',
          description: 'Upload a new document to secure storage',
          parameters: [
            { name: 'file', type: 'binary', required: true, description: 'Document file to upload' },
            { name: 'metadata', type: 'object', required: false, description: 'Additional document metadata' },
            { name: 'access_level', type: 'string', required: false, description: 'Access permissions for the document' },
          ],
          response: '{ "document_id": "doc_123456", "status": "uploaded", "secure_url": "https://secure.bobvault.com/doc/abc123" }',
        },
        {
          name: 'Get Document',
          method: 'GET',
          path: '/documents/{document_id}',
          description: 'Retrieve a specific document',
          parameters: [
            { name: 'document_id', type: 'string', required: true, description: 'Unique identifier for the document' },
            { name: 'download', type: 'boolean', required: false, description: 'Force file download' },
          ],
          response: '{ "name": "contract.pdf", "size": 1024, "last_modified": "2023-05-15T12:30:00Z", "download_url": "https://secure.bobvault.com/download/doc_123456" }',
        },
      ],
      codeExamples: {
        javascript: `
const uploadDocument = async () => {
  const formData = new FormData();
  formData.append('file', fileInput.files[0]);
  formData.append('metadata', JSON.stringify({
    title: 'Company Contract',
    department: 'Legal'
  }));

  const response = await fetch('https://api.bobvault.com/v1/documents', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY'
    },
    body: formData
  });
  
  const data = await response.json();
  console.log('Document uploaded:', data.document_id);
};

uploadDocument();
        `,
        python: `
import requests

def upload_document():
    response = requests.post(
        'https://api.bobvault.com/v1/documents',
        headers={
            'Authorization': 'Bearer YOUR_API_KEY'
        },
        files={'file': file},
        data={
            'metadata': json.dumps({
                'title': 'Company Contract',
                'department': 'Legal'
            })
        }
    )
    
    data = response.json()
    print(f'Document uploaded: {data["document_id"]}')

upload_document()
        `,
        curl: `
curl -X POST https://api.bobvault.com/v1/documents \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -F "file=@/path/to/contract.pdf" \\
  -F 'metadata={"title":"Company Contract","department":"Legal"}'
        `
      }
    }
  },
  'datawarehouse': {
    name: 'DataWarehouse',
    description: 'Cloud-based data warehousing and analytics platform.',
    version: 'v3.0',
    baseURL: 'https://api.datawarehouse.com/v3',
    authentication: 'API Key (Header: X-API-Key)',
    logo: 'https://via.placeholder.com/80',
    pricing: 'Starting at $499/month',
    swaggerUrl: 'https://petstore.swagger.io/v2/swagger.json',
    documentation: {
      overview: `
        DataWarehouse offers a comprehensive cloud-based data warehousing 
        solution that enables businesses to store, transform, and analyze 
        large volumes of data with unprecedented ease and performance.
      `,
      endpoints: [
        {
          name: 'Create Dataset',
          method: 'POST',
          path: '/datasets',
          description: 'Create a new dataset in the data warehouse',
          parameters: [
            { name: 'name', type: 'string', required: true, description: 'Name of the dataset' },
            { name: 'schema', type: 'object', required: true, description: 'Dataset schema definition' },
            { name: 'source', type: 'string', required: false, description: 'Data source for the dataset' },
          ],
          response: '{ "dataset_id": "dst_123456", "status": "creating", "estimated_completion": "2023-05-20T14:30:00Z" }',
        },
        {
          name: 'Query Dataset',
          method: 'POST',
          path: '/query',
          description: 'Run a SQL query on a dataset',
          parameters: [
            { name: 'dataset_id', type: 'string', required: true, description: 'Identifier of the dataset to query' },
            { name: 'query', type: 'string', required: true, description: 'SQL query to execute' },
            { name: 'limit', type: 'number', required: false, description: 'Maximum number of rows to return' },
          ],
          response: '{ "results": [ { "id": 1, "name": "John Doe", "age": 35 } ], "total_rows": 1000 }',
        },
      ],
      codeExamples: {
        javascript: `
const queryDataset = async () => {
  const response = await fetch('https://api.datawarehouse.com/v3/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key': 'YOUR_API_KEY'
    },
    body: JSON.stringify({
      dataset_id: 'dst_customer_data',
      query: 'SELECT * FROM customers WHERE age > 30 LIMIT 100',
      limit: 100
    })
  });
  
  const data = await response.json();
  console.log('Query results:', data.results);
};

queryDataset();
        `,
        python: `
import requests

def query_dataset():
    response = requests.post(
        'https://api.datawarehouse.com/v3/query',
        headers={
            'Content-Type': 'application/json',
            'X-API-Key': 'YOUR_API_KEY'
        },
        json={
            'dataset_id': 'dst_customer_data',
            'query': 'SELECT * FROM customers WHERE age > 30 LIMIT 100',
            'limit': 100
        }
    )
    
    data = response.json()
    print('Query results:', data['results'])

query_dataset()
        `,
        curl: `
curl -X POST https://api.datawarehouse.com/v3/query \\
  -H "Content-Type: application/json" \\
  -H "X-API-Key: YOUR_API_KEY" \\
  -d '{
    "dataset_id": "dst_customer_data",
    "query": "SELECT * FROM customers WHERE age > 30 LIMIT 100",
    "limit": 100
  }'
        `
      }
    }
  },
};

const APIDocumentation = () => {
  const { apiId } = useParams<{ apiId: string }>();
  const [selectedLanguage, setSelectedLanguage] = useState<'javascript' | 'python' | 'curl'>('javascript');
  const [showSwagger, setShowSwagger] = useState(false);
  const { toast } = useToast();
  
  // Find the specific API documentation
  const apiInfo = apiData[apiId || 'analyticshq'];

  // If no API found, handle the error case
  if (!apiInfo) {
    return (
      <div className="flex">
        <div className="flex-1 px-12 py-10 max-w-4xl">
          <PageHeading 
            subtitle="API Documentation" 
            title="API Not Found"
            description="The API documentation you're looking for doesn't exist."
          />
          <p className="text-devscribe-text-secondary mb-8">
            Please return to the <a href="/api-marketplace" className="text-devscribe-teal hover:underline">API Marketplace</a> to find available APIs.
          </p>
        </div>
      </div>
    );
  }

  // Table of Contents items
  const tocItems = [
    { id: 'overview', title: 'Overview' },
    { id: 'authentication', title: 'Authentication' },
    { id: 'endpoints', title: 'Endpoints' },
    { id: 'code-examples', title: 'Code Examples' },
    { id: 'api-explorer', title: 'API Explorer' },
  ];

  // Utility function to copy to clipboard
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard",
      description: "The code snippet has been copied to your clipboard.",
    });
  };

  return (
    <div className="flex flex-col">
      <div className="flex">
        <div className="flex-1 px-12 py-10 max-w-4xl">
          <PageHeading 
            subtitle={`API Documentation • ${apiInfo.version}`} 
            title={apiInfo.name}
            description={apiInfo.description}
          />

          <div className="mb-8">
            <InfoBox>
              Need help integrating this API? Our support team is available to assist you. Contact us at <a href="mailto:support@devscribe.com" className="text-devscribe-teal hover:underline">support@devscribe.com</a>
            </InfoBox>
          </div>
          
          <section id="overview" className="mt-12">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <div className="bg-devscribe-card-bg border border-devscribe-border rounded-xl p-6">
              <p className="text-devscribe-text-secondary whitespace-pre-line">{apiInfo.documentation.overview}</p>
            </div>
          </section>

          <section id="authentication" className="mt-12">
            <h2 className="text-2xl font-semibold mb-4">Authentication</h2>
            <div className="bg-devscribe-card-bg border border-devscribe-border rounded-xl p-6">
              <p className="text-devscribe-text-secondary">{apiInfo.authentication}</p>
            </div>
          </section>

          <section id="endpoints" className="mt-12">
            <h2 className="text-2xl font-semibold mb-6">Endpoints</h2>
            <div className="space-y-6">
              {apiInfo.documentation.endpoints.map((endpoint, index) => (
                <div key={index} className="bg-devscribe-card-bg border border-devscribe-border rounded-xl overflow-hidden">
                  <div className="flex items-center p-6 border-b border-devscribe-border">
                    <span className={`px-2 py-1 rounded text-xs font-medium mr-3 ${
                      endpoint.method === 'GET' ? 'bg-blue-500/20 text-blue-400' :
                      endpoint.method === 'POST' ? 'bg-green-500/20 text-green-400' :
                      endpoint.method === 'PUT' ? 'bg-yellow-500/20 text-yellow-400' :
                      endpoint.method === 'DELETE' ? 'bg-red-500/20 text-red-400' :
                      'bg-purple-500/20 text-purple-400'
                    }`}>
                      {endpoint.method}
                    </span>
                    <span className="font-mono text-devscribe-teal">{endpoint.path}</span>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-medium mb-2">{endpoint.name}</h3>
                    <p className="text-devscribe-text-secondary mb-6">{endpoint.description}</p>
                    
                    <h4 className="text-sm font-medium text-devscribe-text-secondary mb-2">Parameters</h4>
                    <div className="overflow-x-auto mb-6">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-devscribe-border">
                            <th className="text-left py-2 pr-4 font-medium">Name</th>
                            <th className="text-left py-2 pr-4 font-medium">Type</th>
                            <th className="text-left py-2 pr-4 font-medium">Required</th>
                            <th className="text-left py-2 pr-4 font-medium">Description</th>
                          </tr>
                        </thead>
                        <tbody>
                          {endpoint.parameters.map((param, pIndex) => (
                            <tr key={pIndex} className="border-b border-devscribe-border/50">
                              <td className="py-2 pr-4 font-mono">{param.name}</td>
                              <td className="py-2 pr-4">{param.type}</td>
                              <td className="py-2 pr-4">{param.required ? 'Yes' : 'No'}</td>
                              <td className="py-2 pr-4 text-devscribe-text-secondary">{param.description}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    
                    <h4 className="text-sm font-medium text-devscribe-text-secondary mb-2">Response</h4>
                    <div className="bg-black/20 p-4 rounded font-mono text-sm overflow-x-auto">
                      {endpoint.response}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="code-examples" className="mt-12">
            <h2 className="text-2xl font-semibold mb-6">Code Examples</h2>
            <div className="bg-devscribe-card-bg border border-devscribe-border rounded-xl overflow-hidden">
              <div className="flex border-b border-devscribe-border">
                {(['javascript', 'python', 'curl'] as const).map((lang) => (
                  <button 
                    key={lang}
                    className={`px-4 py-3 text-sm ${selectedLanguage === lang ? 'bg-black/20 text-white' : 'text-devscribe-text-secondary'}`}
                    onClick={() => setSelectedLanguage(lang)}
                  >
                    {lang.charAt(0).toUpperCase() + lang.slice(1)}
                  </button>
                ))}
              </div>
              
              <div className="relative">
                <pre className="p-6 overflow-x-auto text-sm">
                  <code>{apiInfo.documentation.codeExamples[selectedLanguage]}</code>
                </pre>
                <button 
                  onClick={() => copyToClipboard(apiInfo.documentation.codeExamples[selectedLanguage])} 
                  className="absolute top-4 right-4 text-devscribe-text-secondary hover:text-white p-1 rounded-md hover:bg-devscribe-hover-bg"
                >
                  <Copy size={16} />
                </button>
              </div>
            </div>
          </section>
        </div>
        
        <div className="w-64 px-6 py-10">
          <TableOfContents items={tocItems} />
        </div>
      </div>

      <section id="api-explorer" className="mt-6 px-12 mb-20">
        <h2 className="text-2xl font-semibold mb-6">API Explorer</h2>
        <div className="mb-6 flex justify-between items-center">
          <div className="space-y-2 flex items-center gap-4">
            <Button 
              onClick={() => setShowSwagger(!showSwagger)} 
              variant="outline" 
              className="bg-devscribe-teal text-black hover:bg-devscribe-teal/90 border-none"
            >
              {showSwagger ? 'Hide API Explorer' : 'Try API Explorer'}
            </Button>
            <a href="#" className="text-devscribe-teal hover:underline flex items-center gap-1 text-sm">
              <Download size={16} />
              Download SDK
            </a>
            <a href="#" className="text-devscribe-teal hover:underline flex items-center gap-1 text-sm">
              <ExternalLink size={16} />
              View Full API Reference
            </a>
          </div>
        </div>
        
        {showSwagger && (
          <div className="swagger-ui-container bg-devscribe-card-bg rounded-xl p-6 mb-10 border border-devscribe-border">
            <SwaggerUI 
              url={apiInfo.swaggerUrl} 
              docExpansion="list"
              deepLinking={true}
              defaultModelsExpandDepth={-1} // Hide models by default
            />
          </div>
        )}
      </section>
    </div>
  );
};

export default APIDocumentation;
