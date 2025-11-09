INSERT INTO request (title, description, requester, approver, type, status, comment, createdAt, updatedAt)
VALUES ('Deploy API Service', 'Approval required for a new version', 'jleal', 'amartinez', 'Deployment', 'PENDING', 'Waiting for approval', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO request (title, description, requester, approver, type, status, comment, createdAt, updatedAt)
VALUES ('Access to Jenkins', 'Requesting temporary access for CI/CD monitoring', 'mrojas', 'lcastillo', 'Access', 'APPROVED', 'Granted for 7 days', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO request (title, description, requester, approver, type, status, comment, createdAt, updatedAt)
VALUES ('Database Schema Update', 'Approval required for adding new indexes', 'acardenas', 'hvalencia', 'Change', 'REJECTED', 'Need DBA validation first', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO request (title, description, requester, approver, type, status, comment, createdAt, updatedAt)
VALUES ('Add Microservice Billing', 'Request to include new billing microservice', 'rquintero', 'pnavarro', 'Deployment', 'PENDING', 'Pending architecture review', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO request (title, description, requester, approver, type, status, comment, createdAt, updatedAt)
VALUES ('Access to GitHub Repo', 'Permission to collaborate on the backend repository', 'cmendez', 'jmontoya', 'Access', 'APPROVED', 'Access granted', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO request (title, description, requester, approver, type, status, comment, createdAt, updatedAt)
VALUES ('Upgrade Spring Boot Version', 'Approval needed to migrate from 2.7 to 3.2', 'jleal', 'amartinez', 'Change', 'PENDING', 'Testing compatibility', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO request (title, description, requester, approver, type, status, comment, createdAt, updatedAt)
VALUES ('S3 Bucket Creation', 'Create a new S3 bucket for document storage', 'lramirez', 'pnavarro', 'Infrastructure', 'APPROVED', 'Resources allocated', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO request (title, description, requester, approver, type, status, comment, createdAt, updatedAt)
VALUES ('VPN Access Request', 'Access needed for remote debugging', 'farias', 'hvalencia', 'Access', 'PENDING', 'Security validation required', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO request (title, description, requester, approver, type, status, comment, createdAt, updatedAt)
VALUES ('Deploy Notification Service', 'Approval required for production release', 'arivera', 'amartinez', 'Deployment', 'APPROVED', 'Deployed successfully', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO request (title, description, requester, approver, type, status, comment, createdAt, updatedAt)
VALUES ('Modify CI/CD Pipeline', 'Adding test stage for integration tests', 'cblanco', 'lcastillo', 'Change', 'REJECTED', 'Pipeline too complex, simplify first', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO request (title, description, requester, approver, type, status, comment, createdAt, updatedAt)
VALUES ('Access to DynamoDB Console', 'Temporary access for data migration', 'vhernandez', 'pnavarro', 'Access', 'APPROVED', 'Approved for 48 hours', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO request (title, description, requester, approver, type, status, comment, createdAt, updatedAt)
VALUES ('Release Mobile App', 'Deployment approval for mobile application version 1.3', 'jleal', 'amartinez', 'Deployment', 'PENDING', 'Pending QA validation', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO request (title, description, requester, approver, type, status, comment, createdAt, updatedAt)
VALUES ('AWS Lambda Permission', 'Request to execute Lambda in production', 'cmendez', 'hvalencia', 'Access', 'APPROVED', 'Lambda tested and verified', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO request (title, description, requester, approver, type, status, comment, createdAt, updatedAt)
VALUES ('Database User Creation', 'Request for new PostgreSQL read-only user', 'farias', 'pnavarro', 'Access', 'PENDING', 'Awaiting DBA confirmation', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
