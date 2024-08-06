use anchor_lang::prelude::*;

declare_id!("C9Pxggf14wNgFRefvkLi7CSGBdkTCBkn5Lxnfs9AuS1p");

#[program]
pub mod seven {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
