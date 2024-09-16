CREATE TABLE IF NOT EXISTS "users" (
	"id" uuid PRIMARY KEY NOT NULL,
	"email" varchar(100) NOT NULL,
	"password" varchar(64) NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
