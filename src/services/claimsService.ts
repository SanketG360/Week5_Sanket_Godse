import { Claims } from '../models/claimModel';

async function createClaim(claimData:any) {
  try {
    const claim = await Claims.create(claimData);
    return claim;
  } catch (error) {
    console.error('error', error);
    throw error;
  }
}

async function getClaimById(id:string) {
  try {
    const claim = await Claims.findByPk(id);
    if (!claim) {
      throw new Error('not found');
    }
    return claim;
  } catch (error) {
    console.error('error', error);
    throw error;
  }
}

async function updateClaim(id:string, updateData:any) {
  try {
    const claim = await Claims.findByPk(id);
    if (!claim) {
      throw new Error('not found');
    }
    await claim.update(updateData);
    return claim;
  } catch (error) {
    console.error('error while updating', error);
    throw error;
  }
}

async function deleteClaim(id:string) {
  try {
    const claim = await Claims.findByPk(id);
    if (!claim) {
      throw new Error('not found');
    }
    await claim.destroy();
    return { message:'deleted successfully'};
  } catch (error) {
    console.error('error while deleting',error);
    throw error;
  }
}

export { createClaim, getClaimById, updateClaim, deleteClaim };
