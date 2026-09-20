CREATE TABLE `requests` (
	`id` text PRIMARY KEY NOT NULL,
	`reference` text NOT NULL,
	`idempotency_key` text NOT NULL,
	`owner_id` text,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`phone` text NOT NULL,
	`details` text NOT NULL,
	`status` text DEFAULT 'new' NOT NULL,
	`artwork_key` text,
	`artwork_name` text,
	`artwork_type` text,
	`ip_hash` text NOT NULL,
	`created_at` integer NOT NULL
);

--> statement-breakpoint
CREATE UNIQUE INDEX `idx_requests_idempotency` ON `requests` (`idempotency_key`);
--> statement-breakpoint
CREATE INDEX `idx_requests_owner_created` ON `requests` (`owner_id`,`created_at`);
--> statement-breakpoint
CREATE INDEX `idx_requests_ip_created` ON `requests` (`ip_hash`,`created_at`);
