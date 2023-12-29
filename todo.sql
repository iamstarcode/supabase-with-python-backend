CREATE TABLE IF NOT EXISTS todos (
    id SERIAL PRIMARY KEY,
    user_id UUID DEFAULT uuid_generate_v4() NOT NULL,
    description VARCHAR NOT NULL,
    is_completed BOOLEAN DEFAULT FALSE NOT NULL,
    created_at TIMESTAMPTZ DEFAULT current_timestamp NOT NULL,
    updated_at TIMESTAMPTZ
);

ALTER TABLE todos ENABLE ROW LEVEL SECURITY;