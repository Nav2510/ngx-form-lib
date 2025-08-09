import {
  Dropdown,
  Button,
  Input,
  Radio,
  Checkbox,
  Textarea,
} from 'ngx-form-lib';
import { Config, Field, ParentConfig } from 'ngx-form-lib/shared/models';

/**
 * COMPLEX BUSINESS USE CASE: Employee Onboarding System
 *
 * This comprehensive form handles the complete employee onboarding process for
 * a mid-to-large enterprise organization. It includes:
 *
 * 1. Personal Information Collection
 * 2. Employment Details & Contract Information
 * 3. System Access Requirements (with role-based conditional fields)
 * 4. Emergency Contacts & Medical Information
 * 5. Preferences & Additional Requirements
 * 6. Document Upload & Acknowledgments
 *
 * Business Logic Implemented:
 * - Dynamic field visibility based on employment type
 * - Conditional system access based on department/role
 * - Dependent dropdowns (State -> City, Department -> Team)
 * - Complex validation rules
 * - Multi-step form progression
 */

export const MASTER_CONFIG: Config = {
  header: '🏢 Employee Onboarding System',
  parentConfig: new ParentConfig({
    appearance: 'outline',
    color: 'primary',
  }),
  sections: [
    {
      sectionHeader: '👤 Personal Information',
      fields: [
        // Full Name
        new Input({
          field: new Field({
            name: 'firstName',
            label: 'First Name',
            placeholder: 'Enter your first name',
            hint: 'As it appears on your official documents',
            order: 1,
            classes: ['ngf-col-6'],
            validators: [
              {
                type: 'required',
                value: true,
                message: 'First name is required',
              },
              {
                type: 'minlength',
                value: 2,
                message: 'First name must be at least 2 characters',
              },
            ],
          }),
          subType: 'text',
        }),

        new Input({
          field: new Field({
            name: 'lastName',
            label: 'Last Name',
            placeholder: 'Enter your last name',
            hint: 'As it appears on your official documents',
            order: 2,
            classes: ['ngf-col-6'],
            validators: [
              {
                type: 'required',
                value: true,
                message: 'Last name is required',
              },
              {
                type: 'minlength',
                value: 2,
                message: 'Last name must be at least 2 characters',
              },
            ],
          }),
          subType: 'text',
        }),

        // Contact Information
        new Input({
          field: new Field({
            name: 'email',
            label: 'Personal Email Address',
            placeholder: 'your.email@example.com',
            hint: 'This will be used for initial communication',
            order: 3,
            classes: ['ngf-col-6'],
            validators: [
              { type: 'required', value: true, message: 'Email is required' },
              {
                type: 'email',
                value: true,
                message: 'Please enter a valid email address',
              },
            ],
          }),
          subType: 'email',
        }),

        new Input({
          field: new Field({
            name: 'phone',
            label: 'Mobile Phone Number',
            placeholder: '+1 (555) 123-4567',
            hint: 'Include country code',
            order: 4,
            classes: ['ngf-col-6'],
            validators: [
              {
                type: 'required',
                value: true,
                message: 'Phone number is required',
              },
              {
                type: 'minlength',
                value: 10,
                message: 'Phone number must be at least 10 digits',
              },
            ],
          }),
          subType: 'text',
        }),

        // Address Information with dependent dropdowns
        new Textarea({
          field: new Field({
            name: 'address',
            label: 'Home Address',
            placeholder: 'Street address, apartment/unit number',
            hint: 'Complete postal address for official records',
            order: 5,
            classes: ['ngf-col-12'],
            validators: [
              { type: 'required', value: true, message: 'Address is required' },
            ],
          }),
          rows: 3,
        }),

        new Dropdown({
          field: new Field({
            name: 'state',
            label: 'State/Province',
            order: 6,
            classes: ['ngf-col-4'],
            validators: [
              { type: 'required', value: true, message: 'State is required' },
            ],
          }),
          options: [
            { label: 'California', value: 'CA' },
            { label: 'New York', value: 'NY' },
            { label: 'Texas', value: 'TX' },
            { label: 'Florida', value: 'FL' },
            { label: 'Washington', value: 'WA' },
            { label: 'Illinois', value: 'IL' },
          ],
        }),

        new Input({
          field: new Field({
            name: 'zipCode',
            label: 'ZIP/Postal Code',
            placeholder: '12345',
            order: 7,
            classes: ['ngf-col-4'],
            validators: [
              {
                type: 'required',
                value: true,
                message: 'ZIP code is required',
              },
              {
                type: 'minlength',
                value: 5,
                message: 'ZIP code must be at least 5 characters',
              },
            ],
          }),
          subType: 'text',
        }),
      ],
    },

    {
      sectionHeader: '💼 Employment Details',
      fields: [
        // Employment Type - drives many conditional fields
        new Radio({
          field: new Field({
            name: 'employmentType',
            label: 'Employment Type',
            order: 8,
            classes: ['ngf-col-12'],
            validators: [
              {
                type: 'required',
                value: true,
                message: 'Employment type is required',
              },
            ],
          }),
          options: [
            { label: 'Full-time Employee', value: 'fulltime' },
            { label: 'Part-time Employee', value: 'parttime' },
            { label: 'Contract Worker', value: 'contract' },
            { label: 'Intern', value: 'intern' },
          ],
          showInline: true,
        }),

        // Department and Role
        new Dropdown({
          field: new Field({
            name: 'department',
            label: 'Department',
            order: 9,
            classes: ['ngf-col-6'],
            validators: [
              {
                type: 'required',
                value: true,
                message: 'Department is required',
              },
            ],
          }),
          options: [
            { label: 'Engineering', value: 'engineering' },
            { label: 'Marketing', value: 'marketing' },
            { label: 'Sales', value: 'sales' },
            { label: 'Human Resources', value: 'hr' },
            { label: 'Finance', value: 'finance' },
            { label: 'Operations', value: 'operations' },
            { label: 'Legal', value: 'legal' },
          ],
        }),

        new Input({
          field: new Field({
            name: 'jobTitle',
            label: 'Job Title',
            placeholder: 'Senior Software Engineer',
            order: 10,
            classes: ['ngf-col-6'],
            validators: [
              {
                type: 'required',
                value: true,
                message: 'Job title is required',
              },
            ],
          }),
          subType: 'text',
        }),

        new Input({
          field: new Field({
            name: 'startDate',
            label: 'Start Date',
            placeholder: 'YYYY-MM-DD',
            order: 11,
            classes: ['ngf-col-6'],
            validators: [
              {
                type: 'required',
                value: true,
                message: 'Start date is required',
              },
            ],
          }),
          subType: 'text',
        }),

        // Contract Duration (only for contractors)
        new Input({
          field: new Field({
            name: 'contractDuration',
            label: 'Contract Duration (months)',
            placeholder: '12',
            hint: 'Expected duration of contract in months',
            order: 12,
            classes: ['ngf-col-6'],
            facets: {
              hidden: true,
              disabled: false,
              dependencies: [
                {
                  type: 'hidden',
                  fieldPath: 'employmentType',
                  value: 'contract',
                },
              ],
            },
            validators: [
              {
                type: 'required',
                value: true,
                message: 'Contract duration is required for contractors',
              },
              {
                type: 'min',
                value: 1,
                message: 'Duration must be at least 1 month',
              },
            ],
          }),
          subType: 'number',
        }),

        // Annual Salary (hidden for contractors)
        new Input({
          field: new Field({
            name: 'annualSalary',
            label: 'Annual Salary',
            placeholder: '75000',
            hint: 'Base annual salary in USD',
            order: 13,
            classes: ['ngf-col-6'],
            facets: {
              hidden: false,
              disabled: false,
              dependencies: [
                {
                  type: 'value-change',
                  fieldPath: 'employmentType',
                  value: 'contract',
                  setDependentValueTo: 5000,
                },
              ],
            },
            validators: [
              { type: 'required', value: true, message: 'Salary is required' },
              {
                type: 'min',
                value: 30000,
                message: 'Minimum salary is $30,000',
              },
            ],
          }),
          subType: 'number',
          prefix: { type: 'string', value: '$' },
        }),

        // Hourly Rate (for contractors and part-time)
        new Input({
          field: new Field({
            name: 'hourlyRate',
            label: 'Hourly Rate',
            placeholder: '45.00',
            hint: 'Hourly rate in USD',
            order: 14,
            classes: ['ngf-col-6'],
            facets: {
              hidden: true,
              disabled: false,
              dependencies: [
                {
                  type: 'hidden',
                  fieldPath: 'employmentType',
                  value: null,
                  valueIn: ['contract', 'parttime'],
                },
              ],
            },
            validators: [
              {
                type: 'required',
                value: true,
                message: 'Hourly rate is required',
              },
              { type: 'min', value: 15, message: 'Minimum hourly rate is $15' },
            ],
          }),
          subType: 'number',
          prefix: { type: 'string', value: '$' },
          suffix: { type: 'string', value: '/hr' },
        }),

        // Reporting Manager
        new Input({
          field: new Field({
            name: 'reportingManager',
            label: 'Direct Reporting Manager',
            placeholder: 'Manager Name',
            hint: 'Your immediate supervisor',
            order: 15,
            classes: ['ngf-col-6'],
            validators: [
              {
                type: 'required',
                value: true,
                message: 'Reporting manager is required',
              },
            ],
          }),
          subType: 'text',
        }),
      ],
    },

    {
      sectionHeader: '🔐 System Access & Security',
      fields: [
        // Email Account Type
        new Radio({
          field: new Field({
            name: 'emailAccountType',
            label: 'Email Account Type',
            order: 16,
            classes: ['ngf-col-12'],
            validators: [
              {
                type: 'required',
                value: true,
                message: 'Email account type is required',
              },
            ],
          }),
          options: [
            { label: 'Standard Business Email', value: 'standard' },
            { label: 'Executive/VIP Email', value: 'executive' },
            { label: 'Shared Mailbox Access Only', value: 'shared' },
          ],
          showInline: false,
        }),

        // Security Clearance Level (conditional based on department)
        new Dropdown({
          field: new Field({
            name: 'securityClearance',
            label: 'Security Clearance Level',
            order: 17,
            classes: ['ngf-col-6'],
            validators: [
              {
                type: 'required',
                value: true,
                message: 'Security clearance level is required',
              },
            ],
            facets: {
              hidden: false,
              disabled: false,
              dependencies: [
                {
                  type: 'value-change',
                  fieldPath: 'department',
                  value: null,
                  valueIn: ['engineering', 'legal', 'finance'],
                  setDependentValueTo: 'confidential',
                },
              ],
            },
          }),
          options: [
            { label: 'Public', value: 'public' },
            { label: 'Internal', value: 'internal' },
            { label: 'Confidential', value: 'confidential' },
            { label: 'Restricted', value: 'restricted' },
            { label: 'Top Secret', value: 'topsecret' },
          ],
        }),

        // VPN Access
        new Radio({
          field: new Field({
            name: 'vpnAccess',
            label: 'VPN Access Required',
            order: 18,
            classes: ['ngf-col-6'],
            validators: [
              {
                type: 'required',
                value: true,
                message: 'VPN access requirement must be specified',
              },
            ],
          }),
          options: [
            { label: 'Yes - Remote Work', value: 'yes' },
            { label: 'No - Office Only', value: 'no' },
          ],
          showInline: true,
        }),

        // Hardware Requirements
        new Dropdown({
          field: new Field({
            name: 'laptopType',
            label: 'Laptop/Hardware Type',
            order: 19,
            classes: ['ngf-col-6'],
            validators: [
              {
                type: 'required',
                value: true,
                message: 'Hardware type is required',
              },
            ],
          }),
          options: [
            { label: 'Standard Business Laptop', value: 'standard' },
            { label: 'High-Performance Developer Laptop', value: 'developer' },
            { label: 'MacBook Pro (Development)', value: 'macbook-pro' },
            { label: 'MacBook Air (General Use)', value: 'macbook-air' },
            { label: 'Workstation (Engineering)', value: 'workstation' },
          ],
        }),

        // Software Requirements (conditional based on department)
        new Dropdown({
          field: new Field({
            name: 'softwarePackages',
            label: 'Required Software Packages',
            order: 20,
            classes: ['ngf-col-6'],
            hint: 'Select multiple packages as needed',
            facets: {
              hidden: false,
              disabled: false,
              dependencies: [
                {
                  type: 'value-change',
                  fieldPath: 'department',
                  value: 'engineering',
                  setDependentValueTo: 'development',
                },
              ],
            },
          }),
          options: [
            { label: 'Microsoft Office Suite', value: 'office' },
            { label: 'Adobe Creative Suite', value: 'adobe' },
            { label: 'Development Tools (IDE, Git)', value: 'development' },
            { label: 'Design Tools (Figma, Sketch)', value: 'design' },
            { label: 'Data Analysis (Tableau, PowerBI)', value: 'analytics' },
            { label: 'CRM Access (Salesforce)', value: 'crm' },
          ],
          multiple: true,
        }),

        // System Admin Access (only for senior roles)
        new Checkbox({
          field: new Field({
            name: 'adminAccess',
            label: 'Administrative Access Required',
            order: 21,
            classes: ['ngf-col-12'],
            hint: 'Check if elevated system privileges are needed',
            facets: {
              hidden: true,
              disabled: false,
              dependencies: [
                {
                  type: 'hidden',
                  fieldPath: 'department',
                  value: null,
                  valueIn: ['engineering', 'operations'],
                },
              ],
            },
          }),
          showInline: false,
        }),

        // Database Access
        new Radio({
          field: new Field({
            name: 'databaseAccess',
            label: 'Database Access Level',
            order: 22,
            classes: ['ngf-col-12'],
            facets: {
              hidden: true,
              disabled: false,
              dependencies: [
                {
                  type: 'hidden',
                  fieldPath: 'department',
                  value: null,
                  valueIn: ['engineering', 'finance', 'operations'],
                },
              ],
            },
          }),
          options: [
            { label: 'Read-Only Access', value: 'readonly' },
            { label: 'Read-Write Access', value: 'readwrite' },
            { label: 'Administrative Access', value: 'admin' },
            { label: 'No Database Access', value: 'none' },
          ],
          showInline: false,
        }),
      ],
    },

    {
      sectionHeader: '🚨 Emergency Contact & Health Information',
      fields: [
        // Emergency Contact
        new Input({
          field: new Field({
            name: 'emergencyContactName',
            label: 'Emergency Contact Name',
            placeholder: 'Full name of emergency contact',
            order: 23,
            classes: ['ngf-col-6'],
            validators: [
              {
                type: 'required',
                value: true,
                message: 'Emergency contact name is required',
              },
            ],
          }),
          subType: 'text',
        }),

        new Input({
          field: new Field({
            name: 'emergencyContactRelation',
            label: 'Relationship',
            placeholder: 'Spouse, Parent, Sibling, etc.',
            order: 24,
            classes: ['ngf-col-6'],
            validators: [
              {
                type: 'required',
                value: true,
                message: 'Relationship is required',
              },
            ],
          }),
          subType: 'text',
        }),

        new Input({
          field: new Field({
            name: 'emergencyContactPhone',
            label: 'Emergency Contact Phone',
            placeholder: '+1 (555) 123-4567',
            order: 25,
            classes: ['ngf-col-6'],
            validators: [
              {
                type: 'required',
                value: true,
                message: 'Emergency contact phone is required',
              },
            ],
          }),
          subType: 'text',
        }),

        new Input({
          field: new Field({
            name: 'emergencyContactEmail',
            label: 'Emergency Contact Email (Optional)',
            placeholder: 'emergency@contact.com',
            order: 26,
            classes: ['ngf-col-6'],
            validators: [
              {
                type: 'email',
                value: true,
                message: 'Please enter a valid email address',
              },
            ],
          }),
          subType: 'email',
        }),

        // Medical/Dietary Information
        new Textarea({
          field: new Field({
            name: 'medicalAllergies',
            label: 'Medical Conditions & Allergies',
            placeholder:
              'Any medical conditions, allergies, or dietary restrictions we should know about (optional but helpful for emergencies and office catering)',
            hint: 'This information is confidential and only for emergency situations',
            order: 27,
            classes: ['ngf-col-12'],
          }),
          rows: 3,
        }),
      ],
    },

    {
      sectionHeader: '⚙️ Work Preferences & Additional Information',
      fields: [
        // Work Preferences
        new Radio({
          field: new Field({
            name: 'workLocation',
            label: 'Preferred Work Location',
            order: 28,
            classes: ['ngf-col-12'],
            validators: [
              {
                type: 'required',
                value: true,
                message: 'Work location preference is required',
              },
            ],
          }),
          options: [
            { label: 'Full-time Office', value: 'office' },
            { label: 'Full-time Remote', value: 'remote' },
            { label: 'Hybrid (2-3 days office)', value: 'hybrid' },
            { label: 'Flexible/As Needed', value: 'flexible' },
          ],
          showInline: false,
        }),

        new Dropdown({
          field: new Field({
            name: 'communicationPreference',
            label: 'Primary Communication Preference',
            order: 29,
            classes: ['ngf-col-6'],
            validators: [
              {
                type: 'required',
                value: true,
                message: 'Communication preference is required',
              },
            ],
          }),
          options: [
            { label: 'Email', value: 'email' },
            { label: 'Slack/Teams', value: 'chat' },
            { label: 'Phone/Video Calls', value: 'calls' },
            { label: 'In-Person Meetings', value: 'inperson' },
          ],
        }),

        new Dropdown({
          field: new Field({
            name: 'timezone',
            label: 'Primary Timezone',
            order: 30,
            classes: ['ngf-col-6'],
            validators: [
              {
                type: 'required',
                value: true,
                message: 'Timezone is required',
              },
            ],
          }),
          options: [
            { label: 'Eastern Time (ET)', value: 'EST' },
            { label: 'Central Time (CT)', value: 'CST' },
            { label: 'Mountain Time (MT)', value: 'MST' },
            { label: 'Pacific Time (PT)', value: 'PST' },
            { label: 'Alaska Time', value: 'AKST' },
            { label: 'Hawaii Time', value: 'HST' },
          ],
        }),

        new Textarea({
          field: new Field({
            name: 'additionalNotes',
            label: 'Additional Notes or Special Requirements',
            placeholder:
              'Any additional information that would help us prepare for your arrival (accessibility needs, special accommodations, etc.)',
            hint: 'Optional but helpful for a smooth onboarding experience',
            order: 31,
            classes: ['ngf-col-12'],
          }),
          rows: 4,
        }),

        // Acknowledgments
        new Checkbox({
          field: new Field({
            name: 'policyAcknowledgment',
            label:
              'I acknowledge that I have read and agree to the company policies',
            order: 32,
            classes: ['ngf-col-12'],
            validators: [
              {
                type: 'required',
                value: true,
                message: 'Policy acknowledgment is required',
              },
            ],
          }),
          showInline: false,
        }),

        new Checkbox({
          field: new Field({
            name: 'dataConsent',
            label:
              'I consent to the processing of my personal data for employment purposes',
            order: 33,
            classes: ['ngf-col-12'],
            validators: [
              {
                type: 'required',
                value: true,
                message: 'Data processing consent is required',
              },
            ],
          }),
          showInline: false,
        }),
      ],
    },

    {
      sectionHeader: '📋 Form Actions',
      fields: [
        // Submit Button
        new Button({
          field: new Field({
            name: 'submit',
            label: 'Complete Onboarding Application',
            order: 34,
            classes: ['ngf-col-6'],
            color: 'primary',
          }),
          subType: 'submit',
          attribute: 'mat-raised-button',
        }),

        // Save Draft Button
        new Button({
          field: new Field({
            name: 'saveDraft',
            label: 'Save as Draft',
            order: 35,
            classes: ['ngf-col-3'],
            color: 'accent',
          }),
          subType: 'button',
          attribute: 'mat-button',
        }),

        // Reset Button
        new Button({
          field: new Field({
            name: 'reset',
            label: 'Reset Form',
            order: 36,
            classes: ['ngf-col-3'],
            color: 'warn',
          }),
          subType: 'reset',
          attribute: 'mat-stroked-button',
        }),
      ],
    },
  ],
};
