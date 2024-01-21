CREATE TABLE IF NOT EXISTS todos (
    id SERIAL PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id),
    description VARCHAR NOT NULL,
    is_completed BOOLEAN DEFAULT FALSE NOT NULL,
    created_at TIMESTAMPTZ DEFAULT current_timestamp NOT NULL,
    updated_at TIMESTAMPTZ
);

ALTER TABLE todos ENABLE ROW LEVEL SECURITY;


INSERT INTO todos (user_id, description, is_completed) VALUES ('2bf1f27c-b65f-4c8e-b2fc-77d916e20e56', 'Finish task 2', TRUE);

